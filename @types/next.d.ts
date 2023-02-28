// next.d.ts
import { UserRole } from 'api/generated/resolvers-types'
import type { NextPage } from 'next'
import type { Router } from 'next/dist/client/router'
import type { NextComponentType } from 'next/dist/next-server/lib/utils'
import type { CompletePrivateRouteInfo } from 'next/dist/shared/lib/router/router'
import { Session } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User {
    email: string
    name: string
    image: string
    userRole: UserRole | null
  }
  interface Session {
    expires: string
    user: User
    userId: string
  }
}
declare module 'next' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  export declare type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (component: NextComponentType) => JSX.Element
  }
}

declare module 'next/app' {
  type Messages = { common: typeof import('../public/locales/en/common.json') }
  type IntlMessages = Messages

  type PageProps = {
    messages: IntlMessages
  }

  export declare type AppProps = Pick<
    CompletePrivateRouteInfo,
    'Component' | 'err'
  > & {
    router: Router
    session: Session
    pageProps: PageProps
  } & Record<string, any> & {
      Component: {
        getLayout?: (page: JSX.Element) => JSX.Element
      }
    }
}
