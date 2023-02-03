import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  ProductColor,
  ProductSize,
  ProductVariant,
  useCreateProductVariantMutation,
} from 'generated/generated-graphql'
// import {
//   CdnBucket,
//   UploadFileResponse,
//   useUploadFiles,
// } from 'hooks/useUploadFiles'
import {
  FormDropdown,
  FormSwitch,
  FormTextInput,
} from 'components/backoffice/Inputs'
import {
  FieldName,
  FormLabel,
  FormPlaceholder,
  VariantFieldName,
  YupProductVariantFormValues,
  YupProductVariantValidationSchema,
} from './productForm'

// type UploadFileResponse = File &
//   {
//     fileUrl: string
//   }[]

interface VariantModalProps extends Omit<ModalProps, 'children'> {
  onSuccess?: () => void
  isOpen: boolean
  onClose: () => void
  arePricesInSync?: boolean
  productColors?: Pick<ProductColor, 'id' | 'name' | 'hexValue'>[]
  productSizes?: Pick<ProductSize, 'id' | 'value'>[]
  baseProductPrice: number
  variantData?: ProductVariant | null
}

export const VariantModal: React.VFC<VariantModalProps> = ({
  onSuccess,
  isOpen,
  onClose,
  productColors,
  productSizes,
  arePricesInSync = false,
  baseProductPrice,
  variantData,
  ...rest
}) => {
  const methods = useForm<YupProductVariantFormValues>({
    defaultValues: {
      [VariantFieldName.Sku]: undefined,
      // TODO create custom field for synced price and sale price
      [VariantFieldName.Price]: arePricesInSync ? baseProductPrice : undefined,
      [VariantFieldName.IsOnSale]: false,
      [VariantFieldName.SalePrice]: undefined,
      [VariantFieldName.Quantity]: undefined,
      [VariantFieldName.ColorId]: { value: undefined, label: '' },
      [VariantFieldName.SizeId]: { value: undefined, label: '' },
    },
    resolver: yupResolver(YupProductVariantValidationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    if (variantData) {
      methods.reset({
        [VariantFieldName.Sku]: variantData.sku,
        [VariantFieldName.Price]: variantData.price,
        [VariantFieldName.IsOnSale]: Boolean(variantData.salePrice),
        [VariantFieldName.SalePrice]: variantData.salePrice ?? undefined,
        [VariantFieldName.Quantity]: variantData.quantity,
        [FieldName.ColorId]: {
          value: variantData?.color?.id ?? undefined,
          label: variantData?.color?.name ?? '',
        },
        [FieldName.SizeId]: {
          value: variantData?.size?.id ?? undefined,
          label: variantData?.size?.value ?? '',
        },
      })
    }
  }, [methods, variantData])

  const [createNewVariant, { loading: isVariantCreationPending }] =
    useCreateProductVariantMutation()
  // const {
  //   uploadFiles,
  //   error: fileUploadError,
  //   isUploadPending,
  // } = useUploadFiles()
  console.log('arePricesInSync', arePricesInSync)
  const submit = async ({
    sku,
    price,
    salePrice,
    quantity,
    colorId,
    sizeId,
  }: YupProductVariantFormValues) => {
    // TODO add check if product name exists
    // let uploadedFiles: void | UploadFileResponse
    // if (titleImage) {
    //   uploadedFiles = await uploadFiles({
    //     fileList: titleImage,
    //     bucket: CdnBucket.PRODUCTS,
    //     path: slug,
    //   })
    // }

    const createProduct = async () => {
      await createNewVariant({
        variables: {
          input: {
            productId: variantData?.productId,
            sku: Number(sku),
            price: Number(price),
            salePrice: Number(salePrice),
            quantity: Number(quantity),
            ...(colorId && {
              colorId: colorId?.value,
            }),
            ...(sizeId && {
              sizeId: sizeId?.value,
            }),
          },
        },
      })
    }
    return createProduct()
  }

  const { watch, formState } = methods
  const { errors } = formState
  const isOnSaleWatch = watch(FieldName.IsOnSale)

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontWeight="600"
          fontSize="20px"
          lineHeight="24px"
          fontStyle="normal"
          p="24px"
        >
          Create Variant
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody py="4">
          {isVariantCreationPending ? (
            <Spinner />
          ) : (
            <FormProvider {...methods}>
              <form
                style={{ width: '100%' }}
                onSubmit={methods.handleSubmit(submit)}
              >
                <VStack w="full" spacing="24px" align="start">
                  <FormTextInput
                    id={VariantFieldName.Sku}
                    label={FormLabel.sku}
                    placeholder={FormPlaceholder.sku}
                    errorMessage={errors[VariantFieldName.Sku]?.message}
                    type="number"
                  />
                  <FormTextInput
                    id={FieldName.Price}
                    label={FormLabel.price}
                    placeholder={FormPlaceholder.price}
                    errorMessage={errors[VariantFieldName.Price]?.message}
                    type="number"
                    isDisabled={arePricesInSync}
                  />
                  {productColors && (
                    <FormDropdown
                      id={VariantFieldName.ColorId}
                      label={FormLabel.colorId}
                      placeholder={FormPlaceholder.colorId}
                      errorMessage={errors[VariantFieldName.ColorId]?.message}
                      options={productColors.map((productColor) => {
                        const { id, name } = productColor
                        return {
                          value: id,
                          label: name,
                        }
                      })}
                      isClearable
                    />
                  )}
                  {productSizes && (
                    <FormDropdown
                      id={VariantFieldName.SizeId}
                      label={FormLabel.sizeId}
                      placeholder={FormPlaceholder.sizeId}
                      errorMessage={errors[VariantFieldName.SizeId]?.message}
                      options={productSizes.map((size) => {
                        const { id, value } = size
                        return {
                          value: id,
                          label: value,
                        }
                      })}
                      isClearable
                    />
                  )}
                  {!arePricesInSync && (
                    <>
                      <Flex
                        w="full"
                        justifyContent="space-between"
                        align="center"
                      >
                        <Text fontSize="20px">Is On Sale</Text>
                        <FormSwitch id={VariantFieldName.IsOnSale} />
                      </Flex>
                      {isOnSaleWatch && (
                        <FormTextInput
                          id={VariantFieldName.SalePrice}
                          label={FormLabel.salePrice}
                          placeholder={FormPlaceholder.salePrice}
                          errorMessage={
                            errors[VariantFieldName.SalePrice]?.message
                          }
                          isDisabled
                        />
                      )}
                    </>
                  )}
                  <Button type="submit">Create Variant</Button>
                </VStack>
              </form>
            </FormProvider>
          )}
        </ModalBody>
        <ModalFooter justifyContent="flex-start">
          <Button variant="secondary" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
