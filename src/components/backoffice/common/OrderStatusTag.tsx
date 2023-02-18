import { StoreOrderStatus } from 'generated/generated-graphql'
import { transparentize } from 'polished'
import { Tag } from './Tag'

const OrderStatusTagBackgroundColorMapper: Record<StoreOrderStatus, string> = {
  [StoreOrderStatus.New]: '#FBC756',
  [StoreOrderStatus.InProgress]: '#4DA9FF',
  [StoreOrderStatus.InTransit]: '#C971F3',
  [StoreOrderStatus.Failed]: '#FF5E5E',
  [StoreOrderStatus.Completed]: '#76CA66',
}

export const OrderStatusTag = ({ status }: { status: StoreOrderStatus }) => (
  <Tag
    label={status}
    background={transparentize(
      0.5,
      OrderStatusTagBackgroundColorMapper[status]
    )}
    borderColor={OrderStatusTagBackgroundColorMapper[status]}
  />
)
