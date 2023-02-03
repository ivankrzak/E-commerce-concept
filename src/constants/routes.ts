export type ReturnToSearchParam = {
  returnTo?: string
}

export const Route = {
  FrontPage: () => `/`,
  BackOffice: {
    BackofficeDashboard: () => '/backoffice',
    SignIn: () => '/backoffice/forbidden-access',
    ForbiddenAccess: () => '/backoffice/forbidden-access',
    Products: () => '/backoffice/products',
    CreateProduct: () => `/backoffice/products/create-new-product`,
    ProductPage: ({ slug }: { slug: string }) => `/backoffice/products/${slug}`,
  },
}
