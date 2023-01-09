import { ReactNode } from 'react'
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverContentProps,
  PopoverProps,
  PopoverTrigger,
} from '@chakra-ui/react'
import { useIsOnTouchscreen } from 'hooks/useIsOnTouchscreen'
import { PropsWithChildrenRequired } from 'constants/typings'

interface TooltipProps {
  content: ReactNode
  boxShadow?: PopoverContentProps['boxShadow']
  placement?: PopoverProps['placement']
  isDisabled?: boolean
}

export const Tooltip = ({
  children,
  content,
  placement = 'top',
  boxShadow,
  isDisabled,
}: PropsWithChildrenRequired<TooltipProps>) => {
  const isOnTouchscreen = useIsOnTouchscreen()

  return (
    <Popover
      placement={placement}
      variant="tooltip"
      trigger={isOnTouchscreen ? 'click' : 'hover'}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        {...(isDisabled && { display: 'none' })}
        w="auto"
        maxW="300px"
        {...(boxShadow && {
          boxShadow,
          _focus: { boxShadow },
        })}
      >
        <PopoverArrow bg="black" />
        <PopoverBody textAlign="center">{content}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
