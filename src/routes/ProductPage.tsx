import { Flex, Spinner, Text, VStack } from '@chakra-ui/react'
import { useProductBySlugQuery } from 'generated/generated-graphql'
import { useRouter } from 'next/router'
import { SEO } from 'components/SEO'

export const ProductPage = () => {
  const router = useRouter()
  const { slug: productSlug } = router.query

  const { data: productData } = useProductBySlugQuery({
    variables: { slug: String(productSlug) },
    ssr: true,
  })

  if (!productData) {
    return <Spinner />
  }

  const { name, category, description } = productData.productBySlug
  return (
    <>
      <SEO seoData={{ title: name, description: 'Test Description' }} />
      <Flex w="full" justifyContent="center">
        <VStack color="orange">
          <Text color="orange">{name}</Text>
          <Text color="orange">{category.name}</Text>
          <Text color="orange">{description}</Text>
        </VStack>
      </Flex>
    </>
  )
}
