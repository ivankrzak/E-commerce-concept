import { useCallback, useEffect, useMemo, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { ActionMeta } from 'chakra-react-select'
import { usePlacesQuery } from 'generated/generated-graphql'
import { useDebouncedInput } from 'hooks/useDebouncedInput'
import { Dropdown, DropdownOption } from '../Dropdown/Dropdown'

type AddressSelectOption = {
  placeId: string
  formatted: string
  city: string
  street: string
  postCode: string
  country: string
} & DropdownOption

interface AddressSearchProps {
  id: string
  label: string
  placeholder: string
  error?: string
  initialValue?: string
  onBlur?: () => void
  externalOnChange?: () => void
  onValueSelected?: (
    newValue: AddressSelectOption,
    actionMeta: ActionMeta<unknown> | undefined
  ) => void
}

export const AddressSearch = ({
  id,
  label,
  placeholder,
  error,
  initialValue,
  onValueSelected,
  onBlur,
  externalOnChange,
}: AddressSearchProps) => {
  const [searchValue, setSearchValue] = useState(initialValue ?? '')
  const [searchSelection, setSearchSelection] = useState('')
  const [searchQuery, setSearchQuery] = useState(initialValue ?? '')
  const [hasSelectedDefaultOption, setHasSelectedDefaultOption] =
    useState(false)

  const { debouncedValue: debouncedSearchQuery } =
    useDebouncedInput(searchQuery)
  const placesResponse = usePlacesQuery({
    skip: !debouncedSearchQuery,
    variables: {
      input: {
        searchQuery: debouncedSearchQuery,
      },
    },
  })

  console.log('placesResponse', placesResponse)

  const selectPlace = useCallback(
    (
      option: AddressSelectOption,
      actionMeta: ActionMeta<unknown> | undefined = undefined
    ) => {
      onValueSelected?.(option, actionMeta)
      setSearchSelection(option.label)
      setSearchValue(option.label)
    },
    [onValueSelected]
  )

  const addressSearchOptions = useMemo(
    () =>
      placesResponse.data?.places?.map(
        ({ placeId, formatted, city, street, postCode, country }) =>
          ({
            label: formatted,
            value: placeId,
            city,
            street,
            postCode,
            country,
            placeId,
            formatted,
          } as AddressSelectOption)
      ) ?? [],
    [placesResponse]
  )

  useEffect(() => {
    if (
      !hasSelectedDefaultOption &&
      addressSearchOptions.length >= 1 &&
      addressSearchOptions[0]
    ) {
      setHasSelectedDefaultOption(true)
      selectPlace(addressSearchOptions[0])
    }
  }, [
    onValueSelected,
    hasSelectedDefaultOption,
    selectPlace,
    addressSearchOptions,
    onBlur,
  ])

  return (
    <Flex
      w="full"
      direction={{ base: 'column', md: 'row' }}
      alignItems="baseline"
    >
      <Dropdown
        id={id}
        placeholder={placeholder}
        label={label}
        errorMessage={error}
        isSearchable
        value={searchSelection}
        inputValue={searchValue}
        onInputChange={(newValue, { action }) => {
          if (
            !(
              action === 'menu-close' ||
              action === 'input-blur' ||
              action === 'set-value'
            )
          ) {
            setSearchValue(newValue)
            setSearchQuery(newValue)
          }
        }}
        onChange={(newValue, actionMeta) => {
          const selectedValue = newValue as AddressSelectOption
          console.log('actionMeta', actionMeta)
          if (selectedValue && actionMeta.action === 'select-option') {
            selectPlace(selectedValue, actionMeta)
            externalOnChange?.()
          }
        }}
        options={addressSearchOptions}
        hasDropdownIcon={false}
        filterOption={() => true}
        onBlur={onBlur}
        chakraStyles={{
          input: (provided) => ({
            ...provided,
            opacity: 1,
          }),
        }}
      />
    </Flex>
  )
}
