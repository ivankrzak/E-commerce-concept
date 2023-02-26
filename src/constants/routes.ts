export type ReturnToSearchParam = {
  returnTo?: string
}

export const Route = {
  FrontPage: () => `/`,
  ProductPage: ({ slug }: { slug: string }) => `/products/${slug}`,
  BackOffice: {
    BackofficeDashboard: () => '/backoffice',
    SignIn: () => '/backoffice/forbidden-access',
    ForbiddenAccess: () => '/backoffice/forbidden-access',
    Products: () => '/backoffice/products',
    Customers: () => '/backoffice/customers',
    Marketing: () => '/backoffice/marketing',
    Settings: () => '/backoffice/settings',
    CreateProduct: () => `/backoffice/products/create-new-product`,
    ProductPage: ({ slug }: { slug: string }) => `/backoffice/products/${slug}`,
    Orders: () => '/backoffice/orders',
    OrderDetail: ({ id }: { id: string }) => `/backoffice/orders/${id}`,
  },
}
