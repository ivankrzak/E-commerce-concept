import { forwardRef } from 'react'
import {
  FormLabel,
  HStack,
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react'

export interface SwitchProps extends ChakraSwitchProps {
  label?: string
  id: string
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, id, ...rest }, ref) => (
    <HStack spacing="0">
      <ChakraSwitch id={id} name={id} ref={ref} size="lg" {...rest} />
      {label && (
        <FormLabel variant="switch" htmlFor={id}>
          {label}
        </FormLabel>
      )}
    </HStack>
  )
)
