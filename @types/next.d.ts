// next.d.ts
import type { NextPage } from 'next'
import type { Router } from 'next/dist/client/router'
import type { NextComponentType } from 'next/dist/next-server/lib/utils'
import type { CompletePrivateRouteInfo } from 'next/dist/shared/lib/router/router'
import { Session } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    expires: string
    user: string
    userId: string
    userRole: string
  }
}
declare module 'next' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  export declare type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (component: NextComponentType) => JSX.Element
  }
}

declare module 'next/app' {
  export declare type AppProps = Pick<
    CompletePrivateRouteInfo,
    'Component' | 'err'
  > & {
    router: Router
    session: Session
  } & Record<string, any> & {
      Component: {
        getLayout?: (page: JSX.Element) => JSX.Element
      }
    }
}
