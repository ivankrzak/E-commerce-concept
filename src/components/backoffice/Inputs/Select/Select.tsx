import React from 'react'
import {
  Box,
  FormLabel,
  HStack,
  InputGroup,
  InputRightElement,
  LayoutProps,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  Stack,
  StackDirection,
  Text,
  VStack,
} from '@chakra-ui/react'

export type SelectOption = {
  id?: number
  value: string | number
  label: string
}

export interface SelectProps extends ChakraSelectProps {
  id: string
  options: SelectOption[]
  label?: string
  subLabel?: string
  errorMessage?: string
  labelDirection?: StackDirection
  inputWidth?: LayoutProps['w']
  rightElement?: React.ReactElement
}

// TODO: create custom option component based on Figma when improving design
// TODO: fix placeholder color (styling through theme not working)
const Select: React.VFC<SelectProps> = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(
  (
    {
      id,
      label,
      subLabel,
      inputWidth = 'full',
      options,
      errorMessage,
      value,
      labelDirection = 'column',
      rightElement,
      isDisabled,
      ...rest
    },
    ref
  ) => (
    <Stack
      justifyContent="space-between"
      direction={labelDirection}
      align="start"
      alignItems={labelDirection === 'row' ? 'center' : 'left'}
      w={inputWidth}
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
            <Text fontSize="13px">{label}</Text>
          </HStack>
          <Text color="brand.wildBlueYonder" fontSize="13px">
            {subLabel}
          </Text>
        </VStack>
      )}
      <Box>
        <InputGroup justifyContent="flex-end">
          <ChakraSelect
            value={value}
            name={id}
            ref={ref}
            id={id}
            isDisabled={isDisabled}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </ChakraSelect>
          {rightElement && (
            <InputRightElement
              h="full"
              w="fit-content"
              borderLeftStyle="hidden"
              borderWidth="1px"
              borderRadius="sm"
              borderStartRadius="none"
            >
              {rightElement}
            </InputRightElement>
          )}
        </InputGroup>
        {errorMessage && (
          <Box>
            <Text variant="error" mt="4px">
              {errorMessage}
            </Text>
          </Box>
        )}
      </Box>
    </Stack>
  )
)

export default Select
