// next.d.ts
import React, { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import apolloClient from 'lib/apollo'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

const MyApp = ({ Component, session, pageProps }: AppProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <SessionProvider session={session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
