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

export type CreateCategoryInput = {
  name: Scalars['String'];
  parentCategoryId?: InputMaybe<Scalars['Int']>;
};

export type CreateProductColorInput = {
  hexValue: Scalars['String'];
  name: Scalars['String'];
};

export type CreateProductInput = {
  categoryId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  shortDescription?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  titleImage?: InputMaybe<Scalars['String']>;
};

export type CreateProductSizeInput = {
  value: Scalars['String'];
};

export type CreateProductVariantInput = {
  colorId?: InputMaybe<Scalars['Int']>;
  price: Scalars['Int'];
  productId: Scalars['Int'];
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
  createCategory?: Maybe<Category>;
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


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
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

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  titleImage?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
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
  price: Scalars['Int'];
  product?: Maybe<Product>;
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  salePrice?: Maybe<Scalars['Int']>;
  size?: Maybe<ProductSize>;
  sizeId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  status?: Maybe<ProductStatus>;
  updatedAt: Scalars['Date'];
  variantImage?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Maybe<Category>>;
  login?: Maybe<Scalars['Boolean']>;
  productColors?: Maybe<Array<Maybe<ProductColor>>>;
  productSizes?: Maybe<Array<Maybe<ProductSize>>>;
  productVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  products: Array<Maybe<Product>>;
};


export type QueryLoginArgs = {
  input: LoginInput;
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
  categoryId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titleImage?: InputMaybe<Scalars['String']>;
};

export type UpdateProductSizeInput = {
  value: Scalars['String'];
};

export type UpdateProductVariantInput = {
  colorId?: InputMaybe<Scalars['Int']>;
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


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, name: string, parentCategoryId?: number | null } | null> };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', slug: string, name: string } | null> };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', name: string } | null };

export type CreateProductVariantMutationVariables = Exact<{
  input: CreateProductVariantInput;
}>;


export type CreateProductVariantMutation = { __typename?: 'Mutation', createProductVariant?: { __typename?: 'ProductVariant', sku?: number | null } | null };

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
export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    name
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