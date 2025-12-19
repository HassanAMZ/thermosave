'use client'
/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { cn } from '@/components/lib/utils'
import Image from 'next/image'

export const MDXComponents = {
  Image: Image,
  TOCInline,
  pre: Pre,
  code: (props) => (
    <code
      className={cn(
        'text-xs sm:text-sm md:text-md leading-tight whitespace-pre-wrap py-2 break-words',
        props.className
      )}
      {...props}
    />
  ),

  p: (props) => (
    <p className={cn('text-sm md:text-md py-2 font-medium', props.className)} {...props} />
  ),
  h1: (props) => <h1 className={cn('font-bold py-2 text-3xl', props.className)} {...props} />,
  h2: (props) => (
    <h2 className={cn('font-bold py-2 text-xl md:text-2xl', props.className)} {...props} />
  ),
  h3: (props) => (
    <h3 className={cn('font-bold py-2 text-xl md:text-2xl', props.className)} {...props} />
  ),
  h4: (props) => (
    <h4 className={cn('font-bold py-2 text-xl md:text-2xl', props.className)} {...props} />
  ),
  h5: (props) => (
    <h5 className={cn('font-bold py-2 text-xl md:text-2xl', props.className)} {...props} />
  ),
  h6: (props) => (
    <h6 className={cn('font-bold py-2 text-xl md:text-2xl', props.className)} {...props} />
  ),

  a: (props) => (
    <a
      className={cn(
        'text-sm md:text-md text-red-600 font-semibold capitalize underline decoration-dotted hover:text-red-900',
        props.className
      )}
      {...props}
    />
  ),

  ul: (props) => (
    <ul
      className={cn('text-sm md:text-md text-red-600 font-semibold', props.className)}
      {...props}
    />
  ),
  li: (props) => (
    <li
      className={cn('text-sm md:text-md text-red-600 font-semibold', props.className)}
      {...props}
    />
  ),
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
