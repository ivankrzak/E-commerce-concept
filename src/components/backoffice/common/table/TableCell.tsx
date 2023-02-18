import { ReactNode } from 'react'
import { StackProps, Text, TextProps, VStack } from '@chakra-ui/react'

interface TableCellProps extends StackProps {
  label: string | number | (() => ReactNode)
  subLabel?: string | number | (() => ReactNode)
  labelStyles?: TextProps
  subLabelStyles?: TextProps
  isLabelHighlighted?: boolean
  isSubLabelHighlighted?: boolean
}

export const TableCell = ({
  label,
  subLabel,
  labelStyles,
  subLabelStyles,
  isLabelHighlighted = false,
  isSubLabelHighlighted = false,
  ...rest
}: TableCellProps) => (
  <VStack spacing="8px" w="full" align="start" {...rest}>
    {typeof label === 'string' || typeof label === 'number' ? (
      <Text
        {...(isLabelHighlighted && { fontFamily: 'Space Grotesk Medium' })}
        fontSize="16px"
        {...labelStyles}
      >
        {label}
      </Text>
    ) : (
      label?.()
    )}
    {typeof subLabel === 'string' || typeof subLabel === 'number' ? (
      <Text
        {...(isSubLabelHighlighted && { fontFamily: 'Space Grotesk Medium' })}
        {...subLabelStyles}
      >
        {subLabel}
      </Text>
    ) : (
      subLabel?.()
    )}
  </VStack>
)
