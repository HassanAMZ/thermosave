const fs = require('fs')
const { globby } = require('globby')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'app/**/page.js',
    'data/products/**/*.mdx',
    'data/products/**/*.md',
    'public/tags/**/*.xml',
    '!app/**/_*.js',
    '!app/api',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                let path = page
                  .replace('app/', '/')
                  .replace('/page.js', '')
                  .replace('data/products', '/products')
                  .replace('public/', '/')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('/feed.xml', '')
                // Handle index route
                if (path === '/' || path === '') {
                  path = '/'
                }
                const route = path === '/index' ? '' : path
                // Skip dynamic routes and 404
                if (
                  page.includes('[...slug]') ||
                  page.includes('not-found') ||
                  page.includes('404')
                ) {
                  return ''
                }
                return `
                        <url>
                            <loc>${siteMetadata.siteUrl}${route}</loc>
                        </url>
                    `
              })
              .filter(Boolean)
              .join('')}
        </urlset>
    `

  const formatted = await prettier.format(sitemap, {
    ...(prettierConfig || {}),
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted || sitemap)
})()
