export type ReturnToSearchParam = {
  returnTo?: string
}

export const Route = {
  FrontPage: () => `/`,
  BackOffice: {
    SignIn: () => '/backoffice/forbidden-access',
    ForbiddenAccess: () => '/backoffice/forbidden-access',
  },
}
