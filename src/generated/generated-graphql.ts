import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  name: Scalars['String'];
  parentCategory?: Maybe<Category>;
  parentCategoryId?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Maybe<Product>>>;
  subCategories?: Maybe<Array<Maybe<Category>>>;
  updatedAt: Scalars['Date'];
};

export type ChangeOrderStatusInput = {
  orderIds: Array<Scalars['Int']>;
  status: StoreOrderStatus;
};

export type CreateCategoryInput = {
  name: Scalars['String'];
  parentCategoryId?: InputMaybe<Scalars['Int']>;
};

export type CreateOrderInput = {
  notes?: InputMaybe<Scalars['String']>;
  orderedItems: Array<OrderItemInput>;
  paymentMethodId: Scalars['Int'];
  shippingMethodId: Scalars['Int'];
  userId?: InputMaybe<Scalars['String']>;
};

export type CreateProductColorInput = {
  hexValue: Scalars['String'];
  name: Scalars['String'];
};

export type CreateProductInput = {
  allowOutOfStockPurchase?: InputMaybe<Scalars['Boolean']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isDigital?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  shortDescription?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  titleImageUrl?: InputMaybe<Scalars['String']>;
  variants?: InputMaybe<Array<CreateProductVariantInput>>;
};

export type CreateProductSizeInput = {
  value: Scalars['String'];
};

export type CreateProductVariantInput = {
  colorId?: InputMaybe<Scalars['Int']>;
  isOnSale?: InputMaybe<Scalars['Boolean']>;
  price: Scalars['Int'];
  productId?: InputMaybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  salePrice?: InputMaybe<Scalars['Int']>;
  sizeId?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<ProductStatus>;
  variantImage?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeOrderStatus: Scalars['Boolean'];
  createCategory?: Maybe<Category>;
  createOrder: StoreOrder;
  createProduct?: Maybe<Product>;
  createProductColor?: Maybe<ProductColor>;
  createProductSize?: Maybe<ProductSize>;
  createProductVariant?: Maybe<ProductVariant>;
  createUser?: Maybe<User>;
  deleteCategory?: Maybe<Scalars['Boolean']>;
  deleteProduct?: Maybe<Scalars['Boolean']>;
  deleteProductColor?: Maybe<Scalars['Boolean']>;
  deleteProductSize?: Maybe<Scalars['Boolean']>;
  deleteProductVariant?: Maybe<Scalars['Boolean']>;
  updateCategory?: Maybe<Category>;
  updateProduct?: Maybe<Product>;
  updateProductColor?: Maybe<ProductColor>;
  updateProductSize?: Maybe<ProductSize>;
  updateProductVariant?: Maybe<ProductVariant>;
};


export type MutationChangeOrderStatusArgs = {
  input: ChangeOrderStatusInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateProductColorArgs = {
  input: CreateProductColorInput;
};


export type MutationCreateProductSizeArgs = {
  input: CreateProductSizeInput;
};


export type MutationCreateProductVariantArgs = {
  input: CreateProductVariantInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Int'];
};


export type MutationDeleteProductArgs = {
  productId: Scalars['Int'];
};


export type MutationDeleteProductColorArgs = {
  productColorId: Scalars['Int'];
};


export type MutationDeleteProductSizeArgs = {
  productSizeId: Scalars['Int'];
};


export type MutationDeleteProductVariantArgs = {
  productVariantId: Scalars['Int'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['Int'];
  input: UpdateCategoryInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
  productId: Scalars['Int'];
};


export type MutationUpdateProductColorArgs = {
  input: UpdateProductColorInput;
  productColorId: Scalars['Int'];
};


export type MutationUpdateProductSizeArgs = {
  input: UpdateProductSizeInput;
  productSizeId: Scalars['Int'];
};


export type MutationUpdateProductVariantArgs = {
  input: UpdateProductVariantInput;
  productVariantId: Scalars['Int'];
};

export type OrderItemInput = {
  productVariantId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export enum PaymentStatus {
  Awaiting = 'AWAITING',
  Failed = 'FAILED',
  Successful = 'SUCCESSFUL'
}

export type Product = {
  __typename?: 'Product';
  allowOutOfStockPurchase: Scalars['Boolean'];
  category: Category;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  isDigital: Scalars['Boolean'];
  name: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  syncVariantPrices: Scalars['Boolean'];
  titleImageUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  variants: Array<ProductVariant>;
};

export type ProductColor = {
  __typename?: 'ProductColor';
  createdAt: Scalars['Date'];
  hexValue: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  productVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  updatedAt: Scalars['Date'];
};

export type ProductSize = {
  __typename?: 'ProductSize';
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  productVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
};

export enum ProductStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  PreOrder = 'PRE_ORDER',
  Sale = 'SALE'
}

export type ProductVariant = {
  __typename?: 'ProductVariant';
  color?: Maybe<ProductColor>;
  colorId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  isOnSale: Scalars['Boolean'];
  price: Scalars['Int'];
  product?: Maybe<Product>;
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  salePrice?: Maybe<Scalars['Int']>;
  size?: Maybe<ProductSize>;
  sizeId?: Maybe<Scalars['Int']>;
  sku: Scalars['Int'];
  status?: Maybe<ProductStatus>;
  updatedAt: Scalars['Date'];
  variantImage?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  login?: Maybe<Scalars['Boolean']>;
  orderById: StoreOrder;
  orders: Array<StoreOrder>;
  paymentMethods: Array<PaymentMethod>;
  productBySlug: Product;
  productColors?: Maybe<Array<ProductColor>>;
  productSizes?: Maybe<Array<ProductSize>>;
  productVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  products: Array<Product>;
  shippingMethods: Array<ShippingMethod>;
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryOrderByIdArgs = {
  id: Scalars['Int'];
};


export type QueryProductBySlugArgs = {
  slug: Scalars['String'];
};

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type StoreOrder = {
  __typename?: 'StoreOrder';
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  paymentMethodId: Scalars['Int'];
  paymentStatus: PaymentStatus;
  shippingMethod: ShippingMethod;
  shippingMethodId: Scalars['Int'];
  shippingTrackingNumber?: Maybe<Scalars['Int']>;
  status: StoreOrderStatus;
  storeOrderItems: Array<StoreOrderItems>;
  totalAmount: Scalars['Int'];
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type StoreOrderItems = {
  __typename?: 'StoreOrderItems';
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Int'];
  productVariant?: Maybe<ProductVariant>;
  productVariantId?: Maybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  storeOrder?: Maybe<StoreOrder>;
  storeOrderId?: Maybe<Scalars['Int']>;
};

export enum StoreOrderStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  InTransit = 'IN_TRANSIT',
  New = 'NEW'
}

export type SyncedPricesInput = {
  price: Scalars['Int'];
  salePrice?: InputMaybe<Scalars['Int']>;
};

export type UpdateCategoryInput = {
  name?: InputMaybe<Scalars['String']>;
  parentCategoryId?: InputMaybe<Scalars['Int']>;
};

export type UpdateProductColorInput = {
  hexValue?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInput = {
  allowOutOfStockPurchase?: InputMaybe<Scalars['Boolean']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isDigital?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  syncVariantPrices?: InputMaybe<Scalars['Boolean']>;
  syncedPrices?: InputMaybe<SyncedPricesInput>;
  titleImageUrl?: InputMaybe<Scalars['String']>;
  variants?: InputMaybe<Array<UpdateProductVariantInput>>;
};

export type UpdateProductSizeInput = {
  value: Scalars['String'];
};

export type UpdateProductVariantInput = {
  colorId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  isOnSale?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  salePrice?: InputMaybe<Scalars['Int']>;
  sizeId?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<ProductStatus>;
  variantImage?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER'
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, name: string, parentCategoryId?: number | null, createdAt: string, updatedAt: string }> };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', slug: string, name: string }> };

export type ProductListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductListQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', name: string, isActive: boolean, id: number, shortDescription?: string | null, slug: string, titleImageUrl?: string | null, updatedAt: string, description?: string | null, allowOutOfStockPurchase: boolean, isDigital: boolean, syncVariantPrices: boolean, createdAt: string, category: { __typename?: 'Category', name: string }, variants: Array<{ __typename?: 'ProductVariant', id: number, quantity: number, status?: ProductStatus | null, isOnSale: boolean, salePrice?: number | null, price: number, size?: { __typename?: 'ProductSize', id: number, value: string } | null }> }> };

export type ProductBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ProductBySlugQuery = { __typename?: 'Query', productBySlug: { __typename?: 'Product', name: string, isActive: boolean, id: number, shortDescription?: string | null, slug: string, titleImageUrl?: string | null, updatedAt: string, description?: string | null, allowOutOfStockPurchase: boolean, isDigital: boolean, syncVariantPrices: boolean, createdAt: string, category: { __typename?: 'Category', id: number, name: string }, variants: Array<{ __typename?: 'ProductVariant', id: number, productId: number, sku: number, createdAt: string, updatedAt: string, quantity: number, status?: ProductStatus | null, isOnSale: boolean, salePrice?: number | null, price: number, size?: { __typename?: 'ProductSize', id: number, value: string, createdAt: string, updatedAt: string } | null, color?: { __typename?: 'ProductColor', id: number, name: string, hexValue: string, createdAt: string, updatedAt: string } | null }> } };

export type ProductOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductOptionsQuery = { __typename?: 'Query', productColors?: Array<{ __typename?: 'ProductColor', id: number, name: string, hexValue: string }> | null, productSizes?: Array<{ __typename?: 'ProductSize', id: number, value: string }> | null, categories: Array<{ __typename?: 'Category', id: number, name: string, createdAt: string, updatedAt: string, parentCategory?: { __typename?: 'Category', id: number, name: string } | null }> };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', slug: string, name: string, shortDescription?: string | null, description?: string | null, titleImageUrl?: string | null } | null };

export type CreateProductVariantMutationVariables = Exact<{
  input: CreateProductVariantInput;
}>;


export type CreateProductVariantMutation = { __typename?: 'Mutation', createProductVariant?: { __typename?: 'ProductVariant', sku: number } | null };

export type UpdateProductMutationVariables = Exact<{
  input: UpdateProductInput;
  productId: Scalars['Int'];
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'Product', id: number, name: string, slug: string } | null };

export type OrderListQueryVariables = Exact<{ [key: string]: never; }>;


export type OrderListQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'StoreOrder', id: number, totalAmount: number, shippingTrackingNumber?: number | null, notes?: string | null, status: StoreOrderStatus, paymentStatus: PaymentStatus, userId?: string | null, paymentMethodId: number, shippingMethodId: number, createdAt: string, updatedAt: string, user?: { __typename?: 'User', email: string, name: string } | null, paymentMethod: { __typename?: 'PaymentMethod', id: number, isActive: boolean, name: string }, shippingMethod: { __typename?: 'ShippingMethod', id: number, isActive: boolean, name: string, price: number }, storeOrderItems: Array<{ __typename?: 'StoreOrderItems', id: number, name: string, quantity: number, price: number, storeOrderId?: number | null }> }> };

export type OrderByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type OrderByIdQuery = { __typename?: 'Query', orderById: { __typename?: 'StoreOrder', id: number, totalAmount: number, shippingTrackingNumber?: number | null, notes?: string | null, status: StoreOrderStatus, paymentStatus: PaymentStatus, userId?: string | null, paymentMethodId: number, shippingMethodId: number, createdAt: string, updatedAt: string, user?: { __typename?: 'User', email: string, name: string } | null, paymentMethod: { __typename?: 'PaymentMethod', id: number, isActive: boolean, name: string }, shippingMethod: { __typename?: 'ShippingMethod', id: number, isActive: boolean, name: string, price: number }, storeOrderItems: Array<{ __typename?: 'StoreOrderItems', id: number, name: string, quantity: number, price: number, storeOrderId?: number | null, productVariant?: { __typename?: 'ProductVariant', id: number, sku: number, quantity: number } | null }> } };

export type LoginQueryVariables = Exact<{
  input: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: boolean | null };


export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
    parentCategoryId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    slug
    name
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductListDocument = gql`
    query ProductList {
  products {
    name
    isActive
    id
    shortDescription
    slug
    titleImageUrl
    updatedAt
    description
    allowOutOfStockPurchase
    isDigital
    syncVariantPrices
    createdAt
    category {
      name
    }
    variants {
      id
      size {
        id
        value
      }
      quantity
      status
      isOnSale
      salePrice
      price
    }
  }
}
    `;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductListQuery(baseOptions?: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
      }
export function useProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;
export const ProductBySlugDocument = gql`
    query ProductBySlug($slug: String!) {
  productBySlug(slug: $slug) {
    name
    isActive
    id
    shortDescription
    slug
    titleImageUrl
    updatedAt
    description
    allowOutOfStockPurchase
    isDigital
    syncVariantPrices
    createdAt
    category {
      id
      name
    }
    variants {
      id
      productId
      sku
      createdAt
      updatedAt
      size {
        id
        value
        createdAt
        updatedAt
      }
      color {
        id
        name
        hexValue
        createdAt
        updatedAt
      }
      quantity
      status
      isOnSale
      salePrice
      price
    }
  }
}
    `;

/**
 * __useProductBySlugQuery__
 *
 * To run a query within a React component, call `useProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductBySlugQuery(baseOptions: Apollo.QueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
      }
export function useProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
        }
export type ProductBySlugQueryHookResult = ReturnType<typeof useProductBySlugQuery>;
export type ProductBySlugLazyQueryHookResult = ReturnType<typeof useProductBySlugLazyQuery>;
export type ProductBySlugQueryResult = Apollo.QueryResult<ProductBySlugQuery, ProductBySlugQueryVariables>;
export const ProductOptionsDocument = gql`
    query ProductOptions {
  productColors {
    id
    name
    hexValue
  }
  productSizes {
    id
    value
  }
  categories {
    id
    name
    createdAt
    updatedAt
    parentCategory {
      id
      name
    }
  }
}
    `;

/**
 * __useProductOptionsQuery__
 *
 * To run a query within a React component, call `useProductOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductOptionsQuery(baseOptions?: Apollo.QueryHookOptions<ProductOptionsQuery, ProductOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductOptionsQuery, ProductOptionsQueryVariables>(ProductOptionsDocument, options);
      }
export function useProductOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductOptionsQuery, ProductOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductOptionsQuery, ProductOptionsQueryVariables>(ProductOptionsDocument, options);
        }
export type ProductOptionsQueryHookResult = ReturnType<typeof useProductOptionsQuery>;
export type ProductOptionsLazyQueryHookResult = ReturnType<typeof useProductOptionsLazyQuery>;
export type ProductOptionsQueryResult = Apollo.QueryResult<ProductOptionsQuery, ProductOptionsQueryVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    slug
    name
    shortDescription
    description
    titleImageUrl
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const CreateProductVariantDocument = gql`
    mutation CreateProductVariant($input: CreateProductVariantInput!) {
  createProductVariant(input: $input) {
    sku
  }
}
    `;
export type CreateProductVariantMutationFn = Apollo.MutationFunction<CreateProductVariantMutation, CreateProductVariantMutationVariables>;

/**
 * __useCreateProductVariantMutation__
 *
 * To run a mutation, you first call `useCreateProductVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductVariantMutation, { data, loading, error }] = useCreateProductVariantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductVariantMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductVariantMutation, CreateProductVariantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductVariantMutation, CreateProductVariantMutationVariables>(CreateProductVariantDocument, options);
      }
export type CreateProductVariantMutationHookResult = ReturnType<typeof useCreateProductVariantMutation>;
export type CreateProductVariantMutationResult = Apollo.MutationResult<CreateProductVariantMutation>;
export type CreateProductVariantMutationOptions = Apollo.BaseMutationOptions<CreateProductVariantMutation, CreateProductVariantMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($input: UpdateProductInput!, $productId: Int!) {
  updateProduct(input: $input, productId: $productId) {
    id
    name
    slug
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const OrderListDocument = gql`
    query OrderList {
  orders {
    id
    totalAmount
    shippingTrackingNumber
    notes
    status
    paymentStatus
    userId
    paymentMethodId
    shippingMethodId
    createdAt
    updatedAt
    user {
      email
      name
    }
    paymentMethod {
      id
      isActive
      name
    }
    shippingMethod {
      id
      isActive
      name
      price
    }
    storeOrderItems {
      id
      name
      quantity
      price
      storeOrderId
    }
  }
}
    `;

/**
 * __useOrderListQuery__
 *
 * To run a query within a React component, call `useOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderListQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrderListQuery(baseOptions?: Apollo.QueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderListQuery, OrderListQueryVariables>(OrderListDocument, options);
      }
export function useOrderListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderListQuery, OrderListQueryVariables>(OrderListDocument, options);
        }
export type OrderListQueryHookResult = ReturnType<typeof useOrderListQuery>;
export type OrderListLazyQueryHookResult = ReturnType<typeof useOrderListLazyQuery>;
export type OrderListQueryResult = Apollo.QueryResult<OrderListQuery, OrderListQueryVariables>;
export const OrderByIdDocument = gql`
    query OrderById($id: Int!) {
  orderById(id: $id) {
    id
    totalAmount
    shippingTrackingNumber
    notes
    status
    paymentStatus
    userId
    paymentMethodId
    shippingMethodId
    createdAt
    updatedAt
    user {
      email
      name
    }
    paymentMethod {
      id
      isActive
      name
    }
    shippingMethod {
      id
      isActive
      name
      price
    }
    storeOrderItems {
      id
      name
      quantity
      price
      storeOrderId
      productVariant {
        id
        sku
        quantity
      }
    }
  }
}
    `;

/**
 * __useOrderByIdQuery__
 *
 * To run a query within a React component, call `useOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderByIdQuery(baseOptions: Apollo.QueryHookOptions<OrderByIdQuery, OrderByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderByIdQuery, OrderByIdQueryVariables>(OrderByIdDocument, options);
      }
export function useOrderByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderByIdQuery, OrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderByIdQuery, OrderByIdQueryVariables>(OrderByIdDocument, options);
        }
export type OrderByIdQueryHookResult = ReturnType<typeof useOrderByIdQuery>;
export type OrderByIdLazyQueryHookResult = ReturnType<typeof useOrderByIdLazyQuery>;
export type OrderByIdQueryResult = Apollo.QueryResult<OrderByIdQuery, OrderByIdQueryVariables>;
export const LoginDocument = gql`
    query Login($input: LoginInput!) {
  login(input: $input)
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;