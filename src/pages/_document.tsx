import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { FontUrl } from 'constants/fonts'

export default class StyleLoadingDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {Object.values(FontUrl).map((fontUrl) => (
            <link
              key={fontUrl}
              href={fontUrl}
              rel="preload"
              as="font"
              crossOrigin="true"
            />
          ))}
        </Head>
        <body>
          <ColorModeScript initialColorMode="system" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
