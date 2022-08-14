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
import Script from 'next/script'

let GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
const isProduction = process.env.NODE_ENV === 'production'
if (isProduction) {
  GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
} else {
  GTM_Tracking_ID = 'GTM-XXXXXXX'
}

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
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${GTM_Tracking_ID}');
        `,
        }}
      />
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
