import {
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useOrderByIdQuery } from 'generated/generated-graphql'
import { useRouter } from 'next/router'
import { Route } from 'constants/routes'
import { Card } from 'components/backoffice/common/Card'
import { NextLink } from 'components/backoffice/common/NextLink'
import { OrderStatusTag } from 'components/backoffice/common/OrderStatusTag'
import { PaymentStatusTag } from 'components/backoffice/common/PaymentStatusTag'
import { GridTable } from 'components/backoffice/common/table/GridTable'
import { TableCell } from 'components/backoffice/common/table/TableCell'
import { Tag } from 'components/backoffice/common/Tag'
import { BackArrowIcon } from 'components/backoffice/Icons'
import { TextInput } from 'components/backoffice/Inputs'

const OrderDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const { data: orderData, loading } = useOrderByIdQuery({
    variables: { id: Number(id) },
  })

  if (!orderData) {
    return null
  }

  const {
    notes,
    status,
    shippingMethod,
    paymentMethod,
    totalAmount,
    paymentStatus,
  } = orderData?.orderById

  return (
    <VStack w="full" spacing="24px">
      <Flex w="full" justifyContent="space-between">
        <HStack spacing="8px">
          <NextLink href={Route.BackOffice.Orders()}>
            <BackArrowIcon />
          </NextLink>
          <Text
            fontFamily="Space Grotesk Medium"
            fontSize="28px"
            lineHeight="32px"
            cursor="pointer"
          >
            {id}
          </Text>
          <OrderStatusTag status={status} />
        </HStack>
      </Flex>
      <Flex w="full" direction={{ base: 'column', lg: 'row' }} gridGap="32px">
        <VStack w="full">
          <GridTable
            isLoading={loading}
            data={orderData?.orderById?.storeOrderItems ?? []}
            columns={[
              {
                header: 'Name / SKU',
                cell: ({ name, productVariant }) => (
                  <TableCell
                    label={name}
                    isLabelHighlighted
                    subLabel={productVariant?.sku}
                  />
                ),
                columnStyles: { width: '320px' },
              },
              {
                header: 'Quantity',
                cell: ({ quantity, productVariant }) => (
                  <TableCell
                    label={quantity}
                    subLabel={() =>
                      productVariant && (
                        <Tag label={`${productVariant.quantity} In Stock`} />
                      )
                    }
                  />
                ),
              },
              {
                header: 'Price',
                cell: ({ price }) => <TableCell label={price} />,
              },
              {
                header: 'Total',
                cell: ({ price, quantity }) => (
                  <TableCell label={quantity * price} />
                ),
              },
            ]}
          />
          <Card justifyContent="space-between" direction="row">
            <HStack align="start">
              <Text w="auto" fontFamily="Space Grotesk Medium">
                Note:
              </Text>
              <Text>{notes || 'Without Note'}</Text>
            </HStack>
            <SimpleGrid w="300px" columns={2} justifyItems="end">
              <Text>Shipping Cost:</Text>
              <Text>{shippingMethod.price}</Text>
              <Text>Tax:</Text>
              <Text>TBD</Text>
              <Text>Total:</Text>
              <Text>{totalAmount}</Text>
            </SimpleGrid>
          </Card>
          <SimpleGrid w="full" columns={{ base: 1, md: 2 }} gap="16px">
            <Card title="Shipping information's">
              <VStack w="full" align="start" spacing="8px">
                <HStack>
                  <Text fontFamily="Space Grotesk Medium">Method:</Text>
                  <Text>{shippingMethod.name}</Text>
                </HStack>
                <HStack w="full" align="end">
                  <TextInput
                    id="trackingNumber"
                    label="Tracking Number"
                    placeholder="Type Tracking Number"
                  />
                  <Button size="md" h="44px">
                    Add
                  </Button>
                </HStack>
              </VStack>
            </Card>
            <Card title="Payment information's" h="full" justifyContent="start">
              <SimpleGrid w="fit-content" columns={2} rowGap="8px">
                <Text fontFamily="Space Grotesk Medium">Method:</Text>
                <Text>{paymentMethod.name}</Text>
                <Text fontFamily="Space Grotesk Medium">Status:</Text>
                <PaymentStatusTag status={paymentStatus} />
              </SimpleGrid>
            </Card>
          </SimpleGrid>
        </VStack>
        <Flex
          w={{ base: 'full', lg: '276px' }}
          direction="column"
          gridGap="16px"
        >
          <Text fontFamily="Space Grotesk Medium" fontSize="20px">
            Contact information&apos;s
          </Text>
          <VStack mx="8px" align="start" spacing={0}>
            <Text>krzak.ivan@gmail.com</Text>
            <Text>krzak.ivan@gmail.com</Text>
          </VStack>
          <SimpleGrid w="full" columns={{ base: 1, md: 2, lg: 1 }} gap="16px">
            <VStack w="full" align="start" spacing="16px">
              <Text fontFamily="Space Grotesk Medium" fontSize="16px">
                Billing Address
              </Text>
              <VStack mx="8px" align="start" spacing={0}>
                <Text>krzak.ivan@gmail.com</Text>
                <Text>krzak.ivan@gmail.com</Text>
              </VStack>
            </VStack>
            <VStack w="full" align="start" spacing="16px">
              <Text fontFamily="Space Grotesk Medium" fontSize="16px">
                Shipping Address
              </Text>
              <VStack mx="8px" align="start" spacing={0}>
                <Text>krzak.ivan@gmail.com</Text>
                <Text>krzak.ivan@gmail.com</Text>
              </VStack>
            </VStack>
          </SimpleGrid>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default OrderDetail
