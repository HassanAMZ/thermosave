import '@/css/tailwind.css'
import '@/css/global.css'
import '@/css/prism.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/lib/utils/theme'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const canonicalUrl = (
    `${siteMetadata.siteUrl}` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]
  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <ThemeProvider attribute="class">
        <ChakraProvider theme={theme}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </ThemeProvider>
    </>
  )
}
