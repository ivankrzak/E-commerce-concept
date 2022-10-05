import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import apolloClient from 'lib/apollo'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  </ChakraProvider>
)

export default MyApp
