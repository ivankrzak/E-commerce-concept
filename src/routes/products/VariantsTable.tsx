import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { ProductVariant } from 'generated/generated-graphql'

export const VariantsTable = ({
  variants,
  onEditBtnClick,
  onCreateVariantBtnClick,
}: {
  variants: ProductVariant[]
  onEditBtnClick: (variant: ProductVariant) => void
  onCreateVariantBtnClick: () => void
}) => (
  <>
    <Flex w="full" justify="space-between">
      <Text fontFamily="Space Grotesk Medium" fontSize="20px">
        Variants
      </Text>
      <Button onClick={onCreateVariantBtnClick}>Add Variant</Button>
    </Flex>
    <SimpleGrid w="full" columns={5} bg="backoffice.ebony">
      <Text>Sku</Text>
      <Text>Price</Text>
      <Text>Is On Sale</Text>
      <Text>Stock</Text>
    </SimpleGrid>
    {variants.map((variant) => (
      <SimpleGrid key={variant.id} w="full" columns={5}>
        <Text>{variant?.sku}</Text>
        <Text>{variant?.price}</Text>
        <Text>{variant?.salePrice ? 'Yes' : 'No'}</Text>
        <Text>{variant?.quantity}</Text>
        <Button
          size="sm"
          w="fit-content"
          onClick={() => onEditBtnClick(variant)}
        >
          Edit Variant
        </Button>
      </SimpleGrid>
    ))}
  </>
)
