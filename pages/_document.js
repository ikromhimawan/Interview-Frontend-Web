import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script src='../public/bootstrap/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}