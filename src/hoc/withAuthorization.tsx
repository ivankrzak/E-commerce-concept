import { useEffect } from 'react'
import { Spinner, Stack } from '@chakra-ui/react'
import { UserRole } from 'api/generated/resolvers-types'
import { NextPageWithLayout } from 'next'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { Route } from 'constants/routes'

type WithAuthorizationParams = {
  userRole?: UserRole
  isBackOfficeRoute?: boolean
}

export const withAuthorization =
  ({ userRole }: WithAuthorizationParams = {}) =>
  (Component: NextPageWithLayout) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const WrappedComponent = (props: any) => {
      const { data: session, status } = useSession()
      const router = useRouter()
      const isLoading = status === 'loading'
      const isRouteForbidden =
        userRole !== undefined && session?.user.userRole !== userRole

      useEffect(() => {
        void (() => {
          if (!isLoading) {
            if (!session) {
              void signIn()
            } else if (isRouteForbidden) {
              console.log('session', session)

              void router.replace(Route.FrontPage())
            }
          }
        })()
      }, [isLoading, isRouteForbidden, router, session])

      if (isLoading) {
        return (
          <Stack height="100vh" justify="center" align="center">
            <Spinner size="xl" />
          </Stack>
        )
      }
      return <Component {...props} />
    }
    WrappedComponent.getLayout = Component.getLayout
    return WrappedComponent
  }

export const withAdminAuthorization = withAuthorization({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  userRole: UserRole.Admin,
  isBackOfficeRoute: true,
})
