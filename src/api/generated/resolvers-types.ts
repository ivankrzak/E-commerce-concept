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

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  country: Scalars['String'];
  formatted: Scalars['String'];
  houseNumber?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  placeId: Scalars['String'];
  postCode: Scalars['String'];
  street: Scalars['String'];
  type: AddressType;
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export enum AddressType {
  Billing = 'BILLING',
  Shipping = 'SHIPPING'
}

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

export type CreateAddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  formatted: Scalars['String'];
  houseNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  placeId: Scalars['String'];
  postCode: Scalars['String'];
  street: Scalars['String'];
  type: AddressType;
  userId: Scalars['String'];
};

export type CreateCategoryInput = {
  name: Scalars['String'];
  parentCategoryId?: InputMaybe<Scalars['Int']>;
};

export type CreateOrderAddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  formatted: Scalars['String'];
  houseNumber?: InputMaybe<Scalars['String']>;
  placeId: Scalars['String'];
  postCode: Scalars['String'];
  street: Scalars['String'];
  type: AddressType;
};

export type CreateOrderInput = {
  addresses: Array<CreateOrderAddressInput>;
  email: Scalars['String'];
  name: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  orderedItems: Array<OrderItemInput>;
  paymentMethodId: Scalars['Int'];
  shippingMethodId: Scalars['Int'];
  telNumber: Scalars['Int'];
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

export type GeoapifyAddress = {
  __typename?: 'GeoapifyAddress';
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  placeId?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stateCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type GeoapifyApiResponse = {
  __typename?: 'GeoapifyApiResponse';
  address_line1?: Maybe<Scalars['String']>;
  address_line2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  housenumber?: Maybe<Scalars['String']>;
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  place_id?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_code?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeOrderStatus: Scalars['Boolean'];
  createCategory?: Maybe<Category>;
  createOrUpdateAddress: Address;
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


export type MutationCreateOrUpdateAddressArgs = {
  input: CreateAddressInput;
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

export type OrderAddress = {
  __typename?: 'OrderAddress';
  city: Scalars['String'];
  country: Scalars['String'];
  formatted: Scalars['String'];
  houseNumber?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  placeId: Scalars['String'];
  postCode: Scalars['String'];
  street: Scalars['String'];
  type: AddressType;
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

export type PlacesInput = {
  searchQuery: Scalars['String'];
};

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
  places: Array<GeoapifyAddress>;
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


export type QueryPlacesArgs = {
  input: PlacesInput;
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
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  orderAddresses: Array<OrderAddress>;
  paymentMethod: PaymentMethod;
  paymentMethodId: Scalars['Int'];
  paymentStatus: PaymentStatus;
  shippingMethod: ShippingMethod;
  shippingMethodId: Scalars['Int'];
  shippingTrackingNumber?: Maybe<Scalars['Int']>;
  status: StoreOrderStatus;
  storeOrderItems: Array<StoreOrderItems>;
  telNumber: Scalars['Int'];
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
  address?: Maybe<Address>;
  email: Scalars['String'];
  name: Scalars['String'];
  orders?: Maybe<Array<StoreOrder>>;
  password: Scalars['String'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER'
}

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
  Address: ResolverTypeWrapper<Omit<Address, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  AddressType: AddressType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Omit<Category, 'parentCategory' | 'products' | 'subCategories'> & { parentCategory?: Maybe<ResolversTypes['Category']>, products?: Maybe<Array<Maybe<ResolversTypes['Product']>>>, subCategories?: Maybe<Array<Maybe<ResolversTypes['Category']>>> }>;
  ChangeOrderStatusInput: ChangeOrderStatusInput;
  CreateAddressInput: CreateAddressInput;
  CreateCategoryInput: CreateCategoryInput;
  CreateOrderAddressInput: CreateOrderAddressInput;
  CreateOrderInput: CreateOrderInput;
  CreateProductColorInput: CreateProductColorInput;
  CreateProductInput: CreateProductInput;
  CreateProductSizeInput: CreateProductSizeInput;
  CreateProductVariantInput: CreateProductVariantInput;
  CreateUserInput: CreateUserInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GeoapifyAddress: ResolverTypeWrapper<GeoapifyAddress>;
  GeoapifyApiResponse: ResolverTypeWrapper<GeoapifyApiResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  OrderAddress: ResolverTypeWrapper<OrderAddress>;
  OrderItemInput: OrderItemInput;
  PaymentMethod: ResolverTypeWrapper<PaymentMethod>;
  PaymentStatus: PaymentStatus;
  PlacesInput: PlacesInput;
  Product: ResolverTypeWrapper<ProductModel>;
  ProductColor: ResolverTypeWrapper<Omit<ProductColor, 'productVariants'> & { productVariants?: Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>> }>;
  ProductSize: ResolverTypeWrapper<Omit<ProductSize, 'productVariants'> & { productVariants?: Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>> }>;
  ProductStatus: ProductStatus;
  ProductVariant: ResolverTypeWrapper<Omit<ProductVariant, 'color' | 'product' | 'size'> & { color?: Maybe<ResolversTypes['ProductColor']>, product?: Maybe<ResolversTypes['Product']>, size?: Maybe<ResolversTypes['ProductSize']> }>;
  Query: ResolverTypeWrapper<{}>;
  ShippingMethod: ResolverTypeWrapper<ShippingMethod>;
  StoreOrder: ResolverTypeWrapper<Omit<StoreOrder, 'storeOrderItems' | 'user'> & { storeOrderItems: Array<ResolversTypes['StoreOrderItems']>, user?: Maybe<ResolversTypes['User']> }>;
  StoreOrderItems: ResolverTypeWrapper<Omit<StoreOrderItems, 'productVariant' | 'storeOrder'> & { productVariant?: Maybe<ResolversTypes['ProductVariant']>, storeOrder?: Maybe<ResolversTypes['StoreOrder']> }>;
  StoreOrderStatus: StoreOrderStatus;
  String: ResolverTypeWrapper<Scalars['String']>;
  SyncedPricesInput: SyncedPricesInput;
  UpdateCategoryInput: UpdateCategoryInput;
  UpdateProductColorInput: UpdateProductColorInput;
  UpdateProductInput: UpdateProductInput;
  UpdateProductSizeInput: UpdateProductSizeInput;
  UpdateProductVariantInput: UpdateProductVariantInput;
  User: ResolverTypeWrapper<Omit<User, 'address' | 'orders'> & { address?: Maybe<ResolversTypes['Address']>, orders?: Maybe<Array<ResolversTypes['StoreOrder']>> }>;
  UserRole: UserRole;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Omit<Address, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  Boolean: Scalars['Boolean'];
  Category: Omit<Category, 'parentCategory' | 'products' | 'subCategories'> & { parentCategory?: Maybe<ResolversParentTypes['Category']>, products?: Maybe<Array<Maybe<ResolversParentTypes['Product']>>>, subCategories?: Maybe<Array<Maybe<ResolversParentTypes['Category']>>> };
  ChangeOrderStatusInput: ChangeOrderStatusInput;
  CreateAddressInput: CreateAddressInput;
  CreateCategoryInput: CreateCategoryInput;
  CreateOrderAddressInput: CreateOrderAddressInput;
  CreateOrderInput: CreateOrderInput;
  CreateProductColorInput: CreateProductColorInput;
  CreateProductInput: CreateProductInput;
  CreateProductSizeInput: CreateProductSizeInput;
  CreateProductVariantInput: CreateProductVariantInput;
  CreateUserInput: CreateUserInput;
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  GeoapifyAddress: GeoapifyAddress;
  GeoapifyApiResponse: GeoapifyApiResponse;
  Int: Scalars['Int'];
  LoginInput: LoginInput;
  Mutation: {};
  OrderAddress: OrderAddress;
  OrderItemInput: OrderItemInput;
  PaymentMethod: PaymentMethod;
  PlacesInput: PlacesInput;
  Product: ProductModel;
  ProductColor: Omit<ProductColor, 'productVariants'> & { productVariants?: Maybe<Array<Maybe<ResolversParentTypes['ProductVariant']>>> };
  ProductSize: Omit<ProductSize, 'productVariants'> & { productVariants?: Maybe<Array<Maybe<ResolversParentTypes['ProductVariant']>>> };
  ProductVariant: Omit<ProductVariant, 'color' | 'product' | 'size'> & { color?: Maybe<ResolversParentTypes['ProductColor']>, product?: Maybe<ResolversParentTypes['Product']>, size?: Maybe<ResolversParentTypes['ProductSize']> };
  Query: {};
  ShippingMethod: ShippingMethod;
  StoreOrder: Omit<StoreOrder, 'storeOrderItems' | 'user'> & { storeOrderItems: Array<ResolversParentTypes['StoreOrderItems']>, user?: Maybe<ResolversParentTypes['User']> };
  StoreOrderItems: Omit<StoreOrderItems, 'productVariant' | 'storeOrder'> & { productVariant?: Maybe<ResolversParentTypes['ProductVariant']>, storeOrder?: Maybe<ResolversParentTypes['StoreOrder']> };
  String: Scalars['String'];
  SyncedPricesInput: SyncedPricesInput;
  UpdateCategoryInput: UpdateCategoryInput;
  UpdateProductColorInput: UpdateProductColorInput;
  UpdateProductInput: UpdateProductInput;
  UpdateProductSizeInput: UpdateProductSizeInput;
  UpdateProductVariantInput: UpdateProductVariantInput;
  User: Omit<User, 'address' | 'orders'> & { address?: Maybe<ResolversParentTypes['Address']>, orders?: Maybe<Array<ResolversParentTypes['StoreOrder']>> };
}>;

export type IsAuthDirectiveArgs = {
  userRoles?: Maybe<Array<UserRole>>;
};

export type IsAuthDirectiveResolver<Result, Parent, ContextType = IPrismaContext, Args = IsAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formatted?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  houseNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  placeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AddressType'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type GeoapifyAddressResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['GeoapifyAddress'] = ResolversParentTypes['GeoapifyAddress']> = ResolversObject<{
  addressLine1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  county?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  houseNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lon?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  placeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GeoapifyApiResponseResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['GeoapifyApiResponse'] = ResolversParentTypes['GeoapifyApiResponse']> = ResolversObject<{
  address_line1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  county?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  housenumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lon?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  place_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  changeOrderStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationChangeOrderStatusArgs, 'input'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'input'>>;
  createOrUpdateAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<MutationCreateOrUpdateAddressArgs, 'input'>>;
  createOrder?: Resolver<ResolversTypes['StoreOrder'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'input'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createProductColor?: Resolver<Maybe<ResolversTypes['ProductColor']>, ParentType, ContextType, RequireFields<MutationCreateProductColorArgs, 'input'>>;
  createProductSize?: Resolver<Maybe<ResolversTypes['ProductSize']>, ParentType, ContextType, RequireFields<MutationCreateProductSizeArgs, 'input'>>;
  createProductVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<MutationCreateProductVariantArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'categoryId'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'productId'>>;
  deleteProductColor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteProductColorArgs, 'productColorId'>>;
  deleteProductSize?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteProductSizeArgs, 'productSizeId'>>;
  deleteProductVariant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteProductVariantArgs, 'productVariantId'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id' | 'input'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'input' | 'productId'>>;
  updateProductColor?: Resolver<Maybe<ResolversTypes['ProductColor']>, ParentType, ContextType, RequireFields<MutationUpdateProductColorArgs, 'input' | 'productColorId'>>;
  updateProductSize?: Resolver<Maybe<ResolversTypes['ProductSize']>, ParentType, ContextType, RequireFields<MutationUpdateProductSizeArgs, 'input' | 'productSizeId'>>;
  updateProductVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<MutationUpdateProductVariantArgs, 'input' | 'productVariantId'>>;
}>;

export type OrderAddressResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['OrderAddress'] = ResolversParentTypes['OrderAddress']> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formatted?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  houseNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  placeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AddressType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentMethodResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  allowOutOfStockPurchase?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDigital?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  syncVariantPrices?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  titleImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  variants?: Resolver<Array<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
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
  color?: Resolver<Maybe<ResolversTypes['ProductColor']>, ParentType, ContextType>;
  colorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isOnSale?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salePrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['ProductSize']>, ParentType, ContextType>;
  sizeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ProductStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  variantImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryLoginArgs, 'input'>>;
  orderById?: Resolver<ResolversTypes['StoreOrder'], ParentType, ContextType, RequireFields<QueryOrderByIdArgs, 'id'>>;
  orders?: Resolver<Array<ResolversTypes['StoreOrder']>, ParentType, ContextType>;
  paymentMethods?: Resolver<Array<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  places?: Resolver<Array<ResolversTypes['GeoapifyAddress']>, ParentType, ContextType, RequireFields<QueryPlacesArgs, 'input'>>;
  productBySlug?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductBySlugArgs, 'slug'>>;
  productColors?: Resolver<Maybe<Array<ResolversTypes['ProductColor']>>, ParentType, ContextType>;
  productSizes?: Resolver<Maybe<Array<ResolversTypes['ProductSize']>>, ParentType, ContextType>;
  productVariants?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  shippingMethods?: Resolver<Array<ResolversTypes['ShippingMethod']>, ParentType, ContextType>;
}>;

export type ShippingMethodResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['ShippingMethod'] = ResolversParentTypes['ShippingMethod']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoreOrderResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['StoreOrder'] = ResolversParentTypes['StoreOrder']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderAddresses?: Resolver<Array<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  paymentMethod?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType>;
  paymentMethodId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paymentStatus?: Resolver<ResolversTypes['PaymentStatus'], ParentType, ContextType>;
  shippingMethod?: Resolver<ResolversTypes['ShippingMethod'], ParentType, ContextType>;
  shippingMethodId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shippingTrackingNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StoreOrderStatus'], ParentType, ContextType>;
  storeOrderItems?: Resolver<Array<ResolversTypes['StoreOrderItems']>, ParentType, ContextType>;
  telNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoreOrderItemsResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['StoreOrderItems'] = ResolversParentTypes['StoreOrderItems']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  productVariantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storeOrder?: Resolver<Maybe<ResolversTypes['StoreOrder']>, ParentType, ContextType>;
  storeOrderId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<ResolversTypes['StoreOrder']>>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Date?: GraphQLScalarType;
  GeoapifyAddress?: GeoapifyAddressResolvers<ContextType>;
  GeoapifyApiResponse?: GeoapifyApiResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OrderAddress?: OrderAddressResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductColor?: ProductColorResolvers<ContextType>;
  ProductSize?: ProductSizeResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ShippingMethod?: ShippingMethodResolvers<ContextType>;
  StoreOrder?: StoreOrderResolvers<ContextType>;
  StoreOrderItems?: StoreOrderItemsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = IPrismaContext> = ResolversObject<{
  isAuth?: IsAuthDirectiveResolver<any, any, ContextType>;
}>;
