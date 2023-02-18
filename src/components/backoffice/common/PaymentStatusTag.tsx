import { PaymentStatus } from 'generated/generated-graphql'
import { transparentize } from 'polished'
import { Tag } from './Tag'

const PaymentStatusTagBackgroundColorMapper: Record<PaymentStatus, string> = {
  [PaymentStatus.Awaiting]: '#FBC756',
  [PaymentStatus.Successful]: '#76CA66',
  [PaymentStatus.Failed]: '#FF5E5E',
}

export const PaymentStatusTag = ({ status }: { status: PaymentStatus }) => (
  <Tag
    label={status}
    background={transparentize(
      0.5,
      PaymentStatusTagBackgroundColorMapper[status]
    )}
    borderColor={PaymentStatusTagBackgroundColorMapper[status]}
  />
)
