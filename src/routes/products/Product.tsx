import React, { useState } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import {
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Switch,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Category as CategoryType,
  ProductVariant,
  useCreateProductMutation,
  useProductBySlugQuery,
  useProductOptionsQuery,
  useUpdateProductMutation,
} from 'generated/generated-graphql'
import {
  CdnBucket,
  UploadFileResponse,
  useUploadFiles,
} from 'hooks/useUploadFiles'
import { useRouter } from 'next/router'
import { Route } from 'constants/routes'
import { NextLink } from 'components/backoffice/common/NextLink'
import { BackArrowIcon } from 'components/backoffice/Icons'
import { FormImageInput, FormSwitch } from 'components/backoffice/Inputs'
import { FormDropdown } from 'components/backoffice/Inputs/Dropdown'
import { FormTextarea } from 'components/backoffice/Inputs/Textarea'
import { FormTextInput } from 'components/backoffice/Inputs/TextInput'
import { useErrorToast, useSuccessToast } from 'utils/toast'
import {
  FieldName,
  FormLabel,
  FormPlaceholder,
  YupProductFormValues,
  YupProductValidationSchema,
} from './productForm'
import { VariantDataContainer } from './VariantDataContainer'
import { VariantModal } from './VariantModal'
import { VariantsTable } from './VariantsTable'

const Product = () => {
  const router = useRouter()
  const showSuccessToast = useSuccessToast()
  const showErrorToast = useErrorToast()
  const { slug: productSlug } = router.query
  const [isSingleVariantProduct, setIsSingleVariantProduct] = useState(
    !productSlug
  )
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  )
  const {
    isOpen: isVariantModalOpen,
    onOpen: onVariantModalOpen,
    onClose: onVariantModalClose,
  } = useDisclosure()

  const methods = useForm<YupProductFormValues>({
    defaultValues: {
      [FieldName.Slug]: '',
      [FieldName.Name]: '',
      [FieldName.ShortDescription]: '',
      [FieldName.Description]: '',
      [FieldName.CategoryId]: { value: undefined, label: '' },
      [FieldName.TitleImage]: null,
      [FieldName.Sku]: undefined,
      [FieldName.Price]: undefined,
      [FieldName.IsOnSale]: false,
      [FieldName.SalePrice]: undefined,
      [FieldName.SizeId]: { value: undefined, label: '' },
      [FieldName.ColorId]: { value: undefined, label: '' },
      [FieldName.Quantity]: undefined,
      [FieldName.IsActive]: true,
      [FieldName.AllowOutOfStockPurchase]: false,
      [FieldName.IsDigital]: false,
      [FieldName.SyncVariantPrices]: false,
      [FieldName.HasMultipleVariants]: false,
    },
    resolver: yupResolver(YupProductValidationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })
  // TODO add spinners for loading states
  const { data: productData, refetch: refetchProductData } =
    useProductBySlugQuery({
      skip: !productSlug,
      variables: { slug: String(productSlug) },
      onCompleted: ({ productBySlug }) => {
        methods.reset({
          [FieldName.Slug]: productBySlug?.slug ?? '',
          [FieldName.Name]: productBySlug?.name ?? '',
          [FieldName.ShortDescription]: productBySlug?.shortDescription ?? '',
          [FieldName.Description]: productBySlug?.description ?? '',
          [FieldName.CategoryId]: {
            value: productBySlug.category?.id ?? undefined,
            label: productBySlug.category?.name ?? '',
          },
          [FieldName.Sku]: productBySlug?.variants?.[0]?.sku ?? '',
          [FieldName.Price]: productBySlug?.variants?.[0]?.price ?? undefined,
          [FieldName.IsOnSale]: false,
          [FieldName.SalePrice]:
            productBySlug?.variants?.[0]?.salePrice ?? undefined,
          [FieldName.Quantity]:
            productBySlug?.variants?.[0]?.quantity ?? undefined,
          [FieldName.IsActive]: productBySlug.isActive ?? false,
          [FieldName.AllowOutOfStockPurchase]:
            productBySlug?.allowOutOfStockPurchase,
          [FieldName.IsDigital]: productBySlug?.isDigital,
          [FieldName.SyncVariantPrices]:
            productBySlug?.syncVariantPrices ?? false,
          [FieldName.HasMultipleVariants]: Boolean(
            productBySlug?.variants && productBySlug.variants.length > 1
          ),
          [FieldName.ColorId]: {
            value: productBySlug.variants?.[0]?.color?.id ?? undefined,
            label: productBySlug.variants?.[0]?.color?.name ?? '',
          },
          [FieldName.SizeId]: {
            value: productBySlug.variants?.[0]?.size?.id ?? undefined,
            label: productBySlug.variants?.[0]?.size?.value ?? '',
          },
        })
        setIsSingleVariantProduct(
          Boolean(productBySlug?.variants && productBySlug.variants.length <= 1)
        )
      },
    })

  const {
    formState: { isDirty, errors: formErrors },
    watch,
    setValue,
    control,
  } = methods

  const productSlugWatch = useWatch({ control, name: 'slug' })

  const { data: productOptionsData } = useProductOptionsQuery()
  const [createNewProduct] = useCreateProductMutation({
    onCompleted: () => {
      methods.reset()
      void refetchProductData({ slug: productSlugWatch })
      void router.push(productSlugWatch, undefined, {
        shallow: true,
      })
    },
  })
  const [updateProduct] = useUpdateProductMutation()
  const { uploadFiles, error: fileUploadError } = useUploadFiles()

  const submit = async ({
    slug,
    name,
    shortDescription,
    description,
    categoryId,
    sku,
    price,
    isOnSale,
    salePrice,
    quantity,
    isActive,
    allowOutOfStockPurchase,
    isDigital,
    colorId,
    sizeId,
    titleImage,
  }: YupProductFormValues) => {
    // TODO add check if product name exists
    let uploadedFiles: void | UploadFileResponse
    if (titleImage) {
      uploadedFiles = await uploadFiles({
        fileList: titleImage,
        bucket: CdnBucket.PRODUCTS,
        path: slug,
      })
    }

    if (!fileUploadError) {
      const createProduct = async () => {
        const result = await createNewProduct({
          variables: {
            input: {
              slug,
              name,
              shortDescription: shortDescription || null,
              description: description || null,
              categoryId: categoryId?.value,
              isActive,
              allowOutOfStockPurchase,
              isDigital,
              variants: [
                {
                  sku: Number(sku),
                  price: Number(price),
                  isOnSale,
                  salePrice: Number(salePrice),
                  quantity: Number(quantity),
                  colorId: colorId?.value,
                  sizeId: sizeId?.value,
                },
              ],
              ...(uploadedFiles && { titleImageUrl: uploadedFiles[0].fileUrl }),
            },
          },
        })

        if (result.data?.createProduct) {
          showSuccessToast({
            title: `Product ${slug} was successfully created.`,
          })
        }
      }

      return createProduct()
    }

    showErrorToast()
    return null
  }

  const update = async ({
    slug,
    name,
    shortDescription,
    description,
    categoryId,
    sku,
    price,
    isOnSale,
    salePrice,
    quantity,
    isActive,
    syncVariantPrices,
    allowOutOfStockPurchase,
    isDigital,
    colorId,
    titleImage,
    sizeId,
  }: YupProductFormValues) => {
    let uploadedFiles: void | UploadFileResponse
    if (titleImage) {
      uploadedFiles = await uploadFiles({
        fileList: titleImage,
        bucket: CdnBucket.PRODUCTS,
        path: slug,
      })
    }

    if (!fileUploadError && productData) {
      const createProduct = async () => {
        await updateProduct({
          variables: {
            productId: productData.productBySlug.id,
            input: {
              slug,
              name,
              shortDescription: shortDescription || null,
              description: description || null,
              categoryId: categoryId?.value,
              isActive,
              allowOutOfStockPurchase,
              isDigital,
              ...(isSingleVariantProduct &&
                productData?.productBySlug.variants && {
                  variants: [
                    {
                      id: productData?.productBySlug.variants[0]?.id,
                      sku: Number(sku),
                      price: Number(price),
                      isOnSale,
                      salePrice: Number(salePrice),
                      quantity: Number(quantity),
                      colorId: colorId?.value,
                      sizeId: sizeId?.value,
                    },
                  ],
                }),
              ...(uploadedFiles && { titleImage: uploadedFiles[0].fileUrl }),
              ...(syncVariantPrices && {
                syncVariantPrices,
                syncedPrices: {
                  price,
                  salePrice,
                },
              }),
            },
          },
        })
      }

      return createProduct()
    }
    // Add error toast
    return null
  }
  if (!productOptionsData) {
    return null
  }
  const { productColors, productSizes, categories } = productOptionsData

  const isExistingProduct = productData && productData.productBySlug
  const isOnSaleWatch = watch(FieldName.IsOnSale)
  const areVariantPricesSynchronized = watch(FieldName.SyncVariantPrices)

  return (
    <>
      <FormProvider {...methods}>
        <form
          style={{ width: '100%' }}
          onSubmit={
            productSlug
              ? methods.handleSubmit(update)
              : methods.handleSubmit(submit)
          }
        >
          <VStack w="full" spacing="24px">
            <Flex w="full" justifyContent="space-between">
              <HStack spacing="8px">
                <BackArrowIcon />
                <NextLink href={Route.BackOffice.Products()}>
                  <Text
                    fontFamily="Space Grotesk Medium"
                    fontSize="28px"
                    lineHeight="32px"
                    cursor="pointer"
                  >
                    {productSlug
                      ? productData?.productBySlug.name
                      : 'Create New Product'}
                  </Text>
                </NextLink>
              </HStack>
              <HStack spacing="8px">
                <Button
                  type="submit"
                  isDisabled={Boolean(productSlug && !isDirty)}
                >
                  {productSlug ? 'Save Changes' : 'Create Product'}
                </Button>
                {productSlug && (
                  <Button variant="outline">Delete Product</Button>
                )}
              </HStack>
            </Flex>
            <SimpleGrid w="full" columns={2} spacing="32px">
              <VStack w="full" spacing="24px">
                <FormTextInput
                  id={FieldName.Slug}
                  label={FormLabel.slug}
                  placeholder={FormPlaceholder.slug}
                  errorMessage={formErrors.slug?.message}
                  isDisabled
                />
                <FormTextInput
                  id={FieldName.Name}
                  label={FormLabel.name}
                  placeholder={FormPlaceholder.name}
                  errorMessage={formErrors.name?.message}
                  onChange={({ target }) => {
                    const nameToSlug = target.value
                      .replace(/\s+/g, '-')
                      .toLowerCase()
                    setValue(FieldName.Slug, nameToSlug)
                  }}
                />
                <FormTextarea
                  id={FieldName.ShortDescription}
                  label={FormLabel.shortDescription}
                  placeholder={FormPlaceholder.shortDescription}
                  errorMessage={formErrors.shortDescription?.message}
                />
                <FormTextarea
                  id={FieldName.Description}
                  label={FormLabel.description}
                  placeholder={FormPlaceholder.description}
                  errorMessage={formErrors.description?.message}
                />
                {categories && (
                  <FormDropdown
                    id={FieldName.CategoryId}
                    label={FormLabel.categoryId}
                    placeholder={FormPlaceholder.categoryId}
                    errorMessage={formErrors.categoryId?.message}
                    options={categories.map((category) => {
                      const { id, name } = category as CategoryType
                      return {
                        value: id,
                        label: name,
                      }
                    })}
                  />
                )}
                {!isSingleVariantProduct && (
                  <VStack w="full" spacing="24px">
                    <Flex w="full" justifyContent="space-between">
                      <Text fontSize="16px">Sync Variant Prices</Text>
                      <FormSwitch id={FieldName.SyncVariantPrices} />
                    </Flex>
                    {areVariantPricesSynchronized && (
                      <VStack w="full" spacing="24px">
                        <FormTextInput
                          id={FieldName.Price}
                          label={FormLabel.price}
                          placeholder={FormPlaceholder.price}
                          errorMessage={formErrors[FieldName.Price]?.message}
                          type="number"
                        />
                        <Flex w="full" justifyContent="space-between">
                          <Text fontSize="16px">Is On Sale</Text>
                          <FormSwitch id={FieldName.IsOnSale} />
                        </Flex>
                        {isOnSaleWatch && (
                          <FormTextInput
                            id={FieldName.SalePrice}
                            label={FormLabel.salePrice}
                            placeholder={FormPlaceholder.salePrice}
                            errorMessage={
                              formErrors[FieldName.SalePrice]?.message
                            }
                            type="number"
                          />
                        )}
                      </VStack>
                    )}
                  </VStack>
                )}
                <Flex w="full" justifyContent="space-between">
                  <Text fontSize="16px">Is Active</Text>
                  <FormSwitch id={FieldName.IsActive} />
                </Flex>
                <Flex w="full" justifyContent="space-between">
                  <Text fontSize="16px">Allow Out Of Stock Purchases</Text>
                  <FormSwitch id={FieldName.AllowOutOfStockPurchase} />
                </Flex>
                <Flex w="full" justifyContent="space-between">
                  <Text fontSize="16px">Is Digital Product</Text>
                  <FormSwitch id={FieldName.IsDigital} />
                </Flex>
                <Flex w="full" justifyContent="space-between">
                  <Text fontSize="16px">Has Multiple Variants</Text>
                  <Switch
                    size="lg"
                    isChecked={!isSingleVariantProduct}
                    isDisabled={!isSingleVariantProduct}
                    onChange={() => {
                      setIsSingleVariantProduct(!isSingleVariantProduct)
                    }}
                  />
                </Flex>

                {!isSingleVariantProduct && (
                  <Button
                    variant="outline"
                    isDisabled={
                      productData?.productBySlug?.variants.length !== 1
                    }
                    onClick={() => {
                      setIsSingleVariantProduct(true)
                    }}
                  >
                    Convert to Single Variant
                  </Button>
                )}
              </VStack>
              <VStack>
                <Text>Images</Text>
                <FormImageInput
                  id={FieldName.TitleImage}
                  label={FormLabel.titleImage}
                  errorMessage={String(formErrors.titleImage?.message)}
                  {...(productData?.productBySlug.titleImageUrl && {
                    imageSrc: productData?.productBySlug.titleImageUrl,
                  })}
                />
              </VStack>
            </SimpleGrid>

            {isExistingProduct && !isSingleVariantProduct ? (
              <VariantsTable
                variants={productData.productBySlug.variants}
                onCreateVariantBtnClick={() => {
                  setSelectedVariant(null)
                  onVariantModalOpen()
                }}
                onEditBtnClick={(variant) => {
                  setSelectedVariant(variant)
                  onVariantModalOpen()
                }}
              />
            ) : (
              <VariantDataContainer
                isOnSale={isOnSaleWatch}
                errors={formErrors}
                {...(productColors && { productColors })}
                {...(productSizes && { productSizes })}
              />
            )}
          </VStack>
        </form>
      </FormProvider>
      {isExistingProduct && (
        <VariantModal
          {...(productColors && { productColors })}
          {...(productSizes && { productSizes })}
          variantData={selectedVariant}
          arePricesInSync={areVariantPricesSynchronized}
          baseProductPrice={productData.productBySlug.variants[0].price}
          isOpen={isVariantModalOpen}
          onClose={onVariantModalClose}
        />
      )}
    </>
  )
}

export default Product
