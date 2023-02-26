import { Container, Flex, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import { useProductListQuery } from 'generated/generated-graphql'
import { Route } from 'constants/routes'
import { NextButton } from 'components/backoffice/common/NextButton'
import { ProductCard } from 'components/backoffice/ProductCard'

const Products = () => {
  const { data: productData, loading } = useProductListQuery()

  if (loading) {
    return <Spinner />
  }

  return (
    <Container maxW="1162px">
      <Flex w="full" justifyContent="space-between" mb="24px">
        <Text fontSize="32px" lineHeight="40px" color="backoffice.primary200">
          Products
        </Text>
        <NextButton href={Route.BackOffice.CreateProduct()}>
          Create New Product
        </NextButton>
      </Flex>

      {productData?.products.length !== 0 ? (
        <SimpleGrid columns={5} spacing="16px">
          {productData?.products?.map(
            ({ slug, name, isActive, category, variants, titleImageUrl }) => (
              <ProductCard
                title={name}
                slug={slug}
                {...(titleImageUrl && { imageSrc: titleImageUrl })}
                productProps={[
                  { label: 'Category', value: category?.name },
                  {
                    label: 'Status',
                    value: isActive ? 'Active' : 'Disabled',
                  },
                  {
                    label: 'Price',
                    value: Math.min(
                      ...variants.map(({ price }) => Number(price))
                    ),
                  },
                  { label: 'Variants', value: `${variants?.length}` },
                  {
                    label: 'Inventory',
                    value: `${variants?.length} units`,
                  },
                  {
                    label: 'Is On Sale',
                    value:
                      variants?.map(({ salePrice }) => salePrice).length !== 0
                        ? 'Yes'
                        : 'No',
                  },
                ]}
              />
            )
          )}
        </SimpleGrid>
      ) : (
        <Text>Errrroooor</Text>
      )}
    </Container>
  )
}

export default Products
