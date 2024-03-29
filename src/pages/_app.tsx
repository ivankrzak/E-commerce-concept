// next.d.ts
import React, { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import apolloClient from 'lib/apollo'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { NextIntlProvider } from 'next-intl'
import { theme } from 'theme'
import { Fonts } from 'theme/Fonts'

const MyApp = ({ Component, session, pageProps }: AppProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ApolloProvider client={apolloClient}>
        <SessionProvider session={session}>
          <NextIntlProvider messages={pageProps.messages}>
            {getLayout(<Component {...pageProps} />)}
          </NextIntlProvider>
        </SessionProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
