import React from 'react'
import {
  Box,
  FormLabel,
  Text,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  VStack,
} from '@chakra-ui/react'

export interface TextareaProps extends ChakraTextareaProps {
  id: string
  label?: string
  errorMessage?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, errorMessage, ...rest }, ref) => (
    <VStack w="full" align="start" spacing="4px">
      {label && <FormLabel variant="input">{label}</FormLabel>}
      <ChakraTextarea
        data-hj-allow
        ref={ref}
        id={id}
        name={id}
        resize="none"
        {...rest}
      />
      {errorMessage && (
        <Box>
          <Text variant="error" mt="0">
            {errorMessage}
          </Text>
        </Box>
      )}
    </VStack>
  )
)

export default Textarea
