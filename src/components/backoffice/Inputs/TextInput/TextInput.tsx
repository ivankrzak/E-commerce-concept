import React from 'react'
import {
  Box,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputProps,
  InputRightElement,
  LayoutProps,
  Stack,
  StackDirection,
  Text,
  VStack,
} from '@chakra-ui/react'

export interface TextInputProps extends InputProps {
  id: string
  label?: string
  subLabel?: string
  labelDirection?: StackDirection
  inputWidth?: LayoutProps['w']
  rightElement?: React.ReactElement
  errorMessage?: string
  leftAddon?: string
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      inputWidth = 'full',
      label,
      subLabel,
      labelDirection = 'column',
      rightElement,
      errorMessage = '',
      leftAddon,
      ...rest
    },
    ref
  ) => (
    <Stack
      justifyContent="space-between"
      direction={labelDirection}
      align="start"
      alignItems={labelDirection === 'row' ? 'center' : 'left'}
      spacing="1"
      w={inputWidth}
      style={{ columnGap: '30px' }}
    >
      {label && !subLabel && (
        <HStack>
          <FormLabel variant="input" whiteSpace="nowrap" mr="0">
            {label}
          </FormLabel>
        </HStack>
      )}
      {label && subLabel && (
        <VStack spacing={0} alignItems="start">
          <HStack>
            <Text
              fontFamily="Space Grotesk Medium"
              fontSize="14px"
              color="backoffice.primary"
              _dark={{ color: 'backoffice.wildBlueYonder' }}
            >
              {label}
            </Text>
          </HStack>
          <Text pl="4px" color="brand.wildBlueYonder" fontSize="13px">
            {subLabel}
          </Text>
        </VStack>
      )}
      <Box>
        <InputGroup justifyContent="flex-end">
          {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
          <Input data-hj-allow id={id} name={id} ref={ref} {...rest} />
          {rightElement && (
            <InputRightElement h="full" w="fit-content">
              {rightElement}
            </InputRightElement>
          )}
        </InputGroup>
        {errorMessage && (
          <Box mt="4px">
            <Text variant="error" mt="0">
              {errorMessage}
            </Text>
          </Box>
        )}
      </Box>
    </Stack>
  )
)

export default TextInput
