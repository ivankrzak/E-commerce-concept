import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Product as ProductModel } from '@prisma/client';
import { IPrismaContext } from '../prisma/IPrismaContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
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

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  deleteCategory?: Maybe<Scalars['Boolean']>;
  updateCategory?: Maybe<Category>;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Int'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['Int'];
  input: UpdateCategoryInput;
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
  Product?: Maybe<Product>;
  color?: Maybe<ProductColor>;
  colorId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  price: Scalars['Int'];
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
  productColors?: Maybe<Array<Maybe<ProductColor>>>;
  productSizes?: Maybe<Array<Maybe<ProductSize>>>;
  productVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  products: Array<Maybe<Product>>;
};

export type UpdateCategoryInput = {
  name?: InputMaybe<Scalars['String']>;
  parentCategoryId?: InputMaybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Omit<Category, 'parentCategory' | 'products' | 'subCategories'> & { parentCategory?: Maybe<ResolversTypes['Category']>, products?: Maybe<Array<Maybe<ResolversTypes['Product']>>>, subCategories?: Maybe<Array<Maybe<ResolversTypes['Category']>>> }>;
  CreateCategoryInput: CreateCategoryInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<ProductModel>;
  ProductColor: ResolverTypeWrapper<Omit<ProductColor, 'productVariants'> & { productVariants?: Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>> }>;
  ProductSize: ResolverTypeWrapper<Omit<ProductSize, 'productVariants'> & { productVariants?: Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>> }>;
  ProductStatus: ProductStatus;
  ProductVariant: ResolverTypeWrapper<Omit<ProductVariant, 'Product' | 'color' | 'size'> & { Product?: Maybe<ResolversTypes['Product']>, color?: Maybe<ResolversTypes['ProductColor']>, size?: Maybe<ResolversTypes['ProductSize']> }>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateCategoryInput: UpdateCategoryInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Category: Omit<Category, 'parentCategory' | 'products' | 'subCategories'> & { parentCategory?: Maybe<ResolversParentTypes['Category']>, products?: Maybe<Array<Maybe<ResolversParentTypes['Product']>>>, subCategories?: Maybe<Array<Maybe<ResolversParentTypes['Category']>>> };
  CreateCategoryInput: CreateCategoryInput;
  Date: Scalars['Date'];
  Int: Scalars['Int'];
  Mutation: {};
  Product: ProductModel;
  ProductColor: Omit<ProductColor, 'productVariants'> & { productVariants?: Maybe<Array<Maybe<ResolversParentTypes['ProductVariant']>>> };
  ProductSize: Omit<ProductSize, 'productVariants'> & { productVariants?: Maybe<Array<Maybe<ResolversParentTypes['ProductVariant']>>> };
  ProductVariant: Omit<ProductVariant, 'Product' | 'color' | 'size'> & { Product?: Maybe<ResolversParentTypes['Product']>, color?: Maybe<ResolversParentTypes['ProductColor']>, size?: Maybe<ResolversParentTypes['ProductSize']> };
  Query: {};
  String: Scalars['String'];
  UpdateCategoryInput: UpdateCategoryInput;
}>;

export type CategoryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  parentCategoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  subCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'input'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'categoryId'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id' | 'input'>>;
}>;

export type ProductResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  titleImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductColorResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['ProductColor'] = ResolversParentTypes['ProductColor']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  hexValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productVariants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductSizeResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['ProductSize'] = ResolversParentTypes['ProductSize']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productVariants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductVariantResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['ProductVariant'] = ResolversParentTypes['ProductVariant']> = ResolversObject<{
  Product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['ProductColor']>, ParentType, ContextType>;
  colorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salePrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['ProductSize']>, ParentType, ContextType>;
  sizeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ProductStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  variantImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  categories?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  productColors?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductColor']>>>, ParentType, ContextType>;
  productSizes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductSize']>>>, ParentType, ContextType>;
  productVariants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>, ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Category?: CategoryResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductColor?: ProductColorResolvers<ContextType>;
  ProductSize?: ProductSizeResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

