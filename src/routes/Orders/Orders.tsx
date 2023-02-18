import { Container, Flex, Spinner, Text } from '@chakra-ui/react'
import { useOrderListQuery } from 'generated/generated-graphql'
import { useRouter } from 'next/router'
import { Route } from 'constants/routes'
import { OrderStatusTag } from 'components/backoffice/common/OrderStatusTag'
import { PaymentStatusTag } from 'components/backoffice/common/PaymentStatusTag'
import { GridTable } from 'components/backoffice/common/table/GridTable'
import { TableCell } from 'components/backoffice/common/table/TableCell'

const Orders = () => {
  const router = useRouter()
  const { data: ordersData, loading } = useOrderListQuery()

  if (loading) {
    return <Spinner />
  }

  return (
    <Container maxW="1162px">
      <Flex w="full" justifyContent="space-between" mb="24px">
        <Text fontSize="32px" lineHeight="40px" color="backoffice.primary200">
          Orders
        </Text>
      </Flex>

      {loading ||
        (ordersData?.orders && (
          <GridTable
            isLoading={loading}
            onRowClick={({ id }) =>
              router.push(Route.BackOffice.OrderDetail({ id: String(id) }))
            }
            data={ordersData.orders ?? []}
            columns={[
              {
                header: 'Order Id / Name',
                cell: ({ id }) => (
                  <TableCell
                    label={id}
                    isLabelHighlighted
                    subLabel="Ivan Krzak"
                    // {...(user && { subLabel: user.name })}
                  />
                ),
              },
              {
                header: 'Create At / Status',
                cell: ({ status, createdAt }) => (
                  <TableCell
                    label={new Date(createdAt).toLocaleDateString()}
                    subLabel={() => <OrderStatusTag status={status} />}
                    labelStyles={{ fontSize: '12px' }}
                  />
                ),
              },
              {
                header: 'Payment Method',
                cell: ({ paymentMethod, paymentStatus }) => (
                  <TableCell
                    label={paymentMethod.name}
                    subLabel={() => <PaymentStatusTag status={paymentStatus} />}
                    labelStyles={{ fontSize: '12px' }}
                  />
                ),
              },
              {
                header: 'Shipping Method',
                cell: ({ shippingMethod }) => (
                  <TableCell label={shippingMethod.name} alignSelf="start" />
                ),
              },
              {
                header: 'Qty / Total Amount',
                cell: ({ storeOrderItems, totalAmount }) => (
                  <TableCell
                    label={`${storeOrderItems.length} items`}
                    subLabel={totalAmount}
                    subLabelStyles={{ fontFamily: 'Space Grotesk Medium' }}
                  />
                ),
              },
            ]}
          />
        ))}
    </Container>
  )
}

export default Orders
