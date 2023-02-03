import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Route } from 'constants/routes'
import { ImageIcon } from './Icons'

interface ProductProp {
  label: string
  value: string | number
}
interface ProductCardProps {
  title: string
  imageSrc?: string
  productProps?: ProductProp[]
  slug: string
}

export const ProductCard = ({
  title,
  slug,
  imageSrc,
  productProps,
}: ProductCardProps) => (
  <Link href={Route.BackOffice.ProductPage({ slug })} passHref>
    <Flex
      w="220px"
      h="fit-content"
      p="8px"
      direction="column"
      borderRadius="8px"
      bg="white"
      _dark={{
        bg: 'backoffice.ebony',
        _hover: { bg: 'backoffice.brightGray' },
      }}
      boxShadow="sm"
      cursor="pointer"
      _hover={{ bg: 'backoffice.primary100' }}
    >
      <Flex
        w="full"
        h="220px"
        direction="column"
        justify="center"
        align="center"
        color="backoffice.wildBlueYonder"
        _dark={{ color: 'backoffice.wildBlueYonder' }}
      >
        {imageSrc ? (
          <Box w="full" h="220px" display="block">
            <Image
              width={204}
              height={220}
              layout="responsive"
              src={imageSrc}
            />
          </Box>
        ) : (
          <>
            <ImageIcon w="60px" h="60px" />
            <Text color="inherit">No Image</Text>
          </>
        )}
      </Flex>
      <Text
        w="full"
        textAlign="center"
        fontSize="16px"
        fontFamily="Space Grotesk Medium"
        my="8px"
      >
        {title}
      </Text>
      <SimpleGrid w="full" columns={2}>
        {productProps?.map(({ label, value }) => (
          <VStack key={label} spacing={0} align="start">
            <Text
              fontSize="12px"
              lineHeight="20px"
              color="backoffice.wildBlueYonder"
            >
              {label}
            </Text>
            <Text
              fontSize="12px"
              lineHeight="20px"
              fontFamily="Space Grotesk Light"
            >
              {value}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Flex>
  </Link>
)
