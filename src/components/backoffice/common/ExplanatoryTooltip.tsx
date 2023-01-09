import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { Tooltip } from './Tooltip'

interface ExplanatoryTooltipProps {
  label: string | ReactNode
  size?: number
}

export const ExplanatoryTooltip = ({
  label,
  size = 12,
}: ExplanatoryTooltipProps) => (
  <Tooltip content={label}>
    <Flex alignContent="center">
      <Image src="/icons/questionmark_tooltip.svg" width={size} height={size} />
    </Flex>
  </Tooltip>
)
