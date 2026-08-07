const fs = require('fs')
const { globby } = require('globby')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'app/**/page.js',
    'app/**/page.tsx',
    'public/tags/**/*.xml',
    '!app/**/_*.js',
    '!app/**/_*.tsx',
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
                  .replace('/page.tsx', '')
                  .replace('public/', '/')
                  .replace('.js', '')
                  .replace('.tsx', '')
                  .replace('/feed.xml', '')
                if (path === '/' || path === '') {
                  path = '/'
                }
                const route = path === '/index' ? '' : path
                if (page.includes('[') || page.includes('not-found') || page.includes('404')) {
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
