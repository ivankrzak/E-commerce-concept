import { ForwardedRef, forwardRef, ReactElement, useRef } from 'react'
import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  LayoutProps,
  Stack,
  StackDirection,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  ActionMeta,
  Props as ChakraSelectProps,
  Select,
} from 'chakra-react-select'
import { useIsOnMobile } from 'hooks/useIsOnMobile'
import { transparentize } from 'polished'
import * as yup from 'yup'
import { z } from 'zod'
import { Colors } from 'theme/constants'
import { ExplanatoryTooltip } from 'components/backoffice/common/ExplanatoryTooltip'

export type DropdownOption = {
  value: string | number
  label: string
}

export const ZodDropdownOption = z.object({
  label: z.string(),
  value: z.number().nullable(),
})

export const YupDropdownOption = yup.object({
  label: yup.string(),
  value: yup.number(),
})

export interface DropdownProps extends Omit<ChakraSelectProps, 'onChange'> {
  id: string
  options: DropdownOption[]
  label?: string
  subLabel?: string
  errorMessage?: string
  tooltip?: string
  rightElement?: ReactElement
  hasInputInRightElement?: boolean
  labelDirection?: StackDirection
  hint?: string
  width?: LayoutProps['width']
  hasDropdownIcon?: boolean
  onChange?: (
    newValue: DropdownOption | DropdownOption[] | null,
    actionMeta: ActionMeta<unknown>
  ) => void
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      id,
      label,
      subLabel,
      labelDirection = 'column',
      options,
      errorMessage,
      isDisabled,
      onChange,
      rightElement,
      hasInputInRightElement = false,
      tooltip,
      width = 'full',
      hint,
      chakraStyles,
      hasDropdownIcon = true,
      isInvalid,
      isMulti,
      ...rest
    },
    ref: ForwardedRef<any>
  ) => {
    const internalRef = useRef(null)
    const isTouchscreenDevice = useIsOnMobile()

    return (
      <FormControl id={id} minW={0}>
        <Stack
          justifyContent="space-between"
          direction={labelDirection}
          align="start"
          alignItems={labelDirection === 'row' ? 'center' : 'left'}
          spacing="1"
          w="full"
        >
          {label && !subLabel && (
            <HStack>
              <FormLabel variant="input" whiteSpace="nowrap" mr="0">
                {label}
              </FormLabel>
              {tooltip && <ExplanatoryTooltip label={tooltip} />}
            </HStack>
          )}
          {label && subLabel && (
            <VStack spacing={0} alignItems="start">
              <HStack>
                <Text fontSize="13px">{label}</Text>
                {tooltip && <ExplanatoryTooltip label={tooltip} />}
              </HStack>
              <Text color="brand.wildBlueYonder" fontSize="13px">
                {subLabel}
              </Text>
            </VStack>
          )}
          <Flex flexDirection="column">
            <Flex>
              <Select
                id={id}
                name={id}
                ref={ref || internalRef}
                isDisabled={isDisabled}
                options={options}
                hideSelectedOptions={false}
                closeMenuOnSelect={!isMulti}
                focusBorderColor="brand.darkBlueGray"
                onChange={(newValue, actionMeta) => {
                  const value = newValue as
                    | DropdownOption
                    | DropdownOption[]
                    | null
                  onChange?.(value, actionMeta)
                }}
                noOptionsMessage={() => 'No results found.'}
                chakraStyles={{
                  valueContainer: (provided) => ({
                    ...provided,
                    border: 'none',
                    bgColor: 'backoffice.white',
                    fontSize: '14px',
                    lineHeight: '20px',
                    _dark: {
                      bgColor: 'backoffice.ebony',
                    },
                  }),
                  control: (provided) => ({
                    ...provided,
                    w: width,
                    borderColor: 'backoffice.primary',
                    borderWidth: '1px',
                    borderRadius: '8px',
                    _dark: {
                      border: 'none',
                    },
                  }),
                  container: (provided) => ({
                    ...provided,
                    border: 'none',
                    cursor: 'pointer',
                    w: width,
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: 'brand.wildBlueYonder',
                    fontSize: isTouchscreenDevice ? '16px' : '14px',
                    lineHeight: '20px',
                  }),
                  menu: (provided) => ({
                    ...provided,
                    position: 'absolute',
                    mt: '0px',
                    w: 'full',
                  }),
                  menuList: (provided) => ({
                    ...provided,
                    m: '0px',
                    mt: '4px',
                    p: '0px',
                    bgColor: 'backoffice.white',
                    border: 'none',
                    borderRadius: '8px',
                    _dark: {
                      bgColor: 'backoffice.ebony',
                    },
                  }),
                  option: (provided, { isSelected }) => ({
                    ...provided,
                    mt: '0px',
                    color: 'backoffice.deepPurple',
                    backgroundColor: isSelected
                      ? transparentize(0.75, Colors.backoffice.primary)
                      : 'white',
                    ':hover': {
                      backgroundColor: 'backoffice.white',
                    },
                    fontFamily: isSelected
                      ? 'Space Grotesk Medium'
                      : 'Space Grotesk',
                    fontSize: isTouchscreenDevice ? '16px' : '14px',
                    lineHeight: '20px',
                    _dark: {
                      color: 'backoffice.ghostWhite',
                      bgColor: isSelected
                        ? transparentize(0.75, Colors.backoffice.primary)
                        : 'backoffice.ebony',
                      ':hover': {
                        backgroundColor: 'backoffice.brightGray',
                      },
                    },
                  }),
                  clearIndicator: (provided) => ({
                    ...provided,
                    color: 'backoffice.primary',
                    width: '12px',
                    height: '12px',
                    ...(!hasDropdownIcon && { mr: '12px' }),
                  }),
                  crossIcon: (provided) => ({
                    ...provided,
                    color: 'backoffice.primary',
                    width: '12px',
                    height: '12px',
                  }),
                  loadingIndicator: (provided) => ({
                    ...provided,
                    color: 'gray.500',
                  }),
                  indicatorsContainer: (provided) => ({
                    ...provided,
                    bgColor: 'backoffice.white',
                    _dark: {
                      bgColor: 'backoffice.ebony',
                    },
                  }),
                  indicatorSeparator: (provided) => ({
                    ...provided,
                    display: 'none',
                  }),
                  dropdownIndicator: (provided) => ({
                    ...provided,
                    ...(!hasDropdownIcon && { display: 'none' }),
                    bg: 'backoffice.white',
                    pl: '5px',
                    pr: '12px',
                    fontSize: '20px',
                    border: 'none',
                    color: 'backoffice.primary',
                    _dark: {
                      bgColor: 'backoffice.ebony',
                    },
                  }),
                  multiValueLabel: (provided) => ({
                    ...provided,
                    color: 'brand.darkSlateBlue',
                    fontSize: isTouchscreenDevice ? '16px' : '14px',
                    lineHeight: '20px',
                  }),
                  noOptionsMessage: (provided) => ({
                    ...provided,
                    textColor: 'backoffice.wildBlueYonder',
                    fontSize: isTouchscreenDevice ? '16px' : '14px',
                  }),
                  ...chakraStyles,
                }}
                isInvalid={Boolean(errorMessage) || isInvalid}
                isMulti={isMulti}
                {...rest}
              />
              {rightElement && (
                <Flex
                  w="fit-content"
                  alignItems="center"
                  {...(!hasInputInRightElement && {
                    mt: '4px',
                    h: '44px',
                    borderColor: 'brand.gainsboro',
                    borderLeft: 'none',
                    borderRadius: 'sm',
                    borderStartRadius: 'none',
                    borderWidth: '1px',
                  })}
                >
                  {rightElement}
                </Flex>
              )}
            </Flex>
            {errorMessage && (
              <Text variant="error" mt="4px">
                {errorMessage}
              </Text>
            )}
          </Flex>
        </Stack>
      </FormControl>
    )
  }
)
