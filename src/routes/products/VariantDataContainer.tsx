import { FieldErrors } from 'react-hook-form'
import { Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { ProductColor, ProductSize } from 'generated/generated-graphql'
import { FormSwitch } from 'components/backoffice/Inputs'
import { FormDropdown } from 'components/backoffice/Inputs/Dropdown'
import { FormTextInput } from 'components/backoffice/Inputs/TextInput'
import {
  FieldName,
  FormLabel,
  FormPlaceholder,
  YupProductFormValues,
} from './productForm'

export const VariantDataContainer = ({
  errors,
  isOnSale = false,
  productColors,
  productSizes,
}: {
  errors: FieldErrors<YupProductFormValues>
  isOnSale?: boolean
  productColors?: Pick<ProductColor, 'id' | 'name' | 'hexValue'>[]
  productSizes?: Pick<ProductSize, 'id' | 'value'>[]
}) => (
  <SimpleGrid w="full" columns={2} spacing="32px">
    <VStack w="full" spacing="24px" align="start">
      <Text fontSize="24px">Product Options</Text>
      <FormTextInput
        id={FieldName.Sku}
        label={FormLabel.sku}
        placeholder={FormPlaceholder.sku}
        errorMessage={errors[FieldName.Sku]?.message}
        type="number"
      />
      <FormTextInput
        id={FieldName.Price}
        label={FormLabel.price}
        placeholder={FormPlaceholder.price}
        errorMessage={errors[FieldName.Price]?.message}
        type="number"
      />
      {productColors && (
        <FormDropdown
          id={FieldName.ColorId}
          label={FormLabel.colorId}
          placeholder={FormPlaceholder.colorId}
          errorMessage={errors[FieldName.ColorId]?.message}
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
          id={FieldName.SizeId}
          label={FormLabel.sizeId}
          placeholder={FormPlaceholder.sizeId}
          errorMessage={errors[FieldName.SizeId]?.message}
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
      <Flex w="full" justifyContent="space-between" align="center">
        <Text fontSize="20px">Is On Sale</Text>
        <FormSwitch id={FieldName.IsOnSale} />
      </Flex>
      {isOnSale && (
        <FormTextInput
          id={FieldName.SalePrice}
          label={FormLabel.salePrice}
          placeholder={FormPlaceholder.salePrice}
          errorMessage={errors[FieldName.SalePrice]?.message}
        />
      )}
    </VStack>
    <VStack spacing="24px" align="start">
      <Text fontSize="24px">Inventory</Text>
      <FormTextInput
        id={FieldName.Quantity}
        label={FormLabel.quantity}
        placeholder={FormPlaceholder.quantity}
        errorMessage={errors[FieldName.Quantity]?.message}
        type="number"
      />
    </VStack>
  </SimpleGrid>
)
