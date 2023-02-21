import { FormProvider, useForm } from 'react-hook-form'
import { Button, Container, Flex, Text, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { InferType } from 'yup'
import { AddressSearch, FormTextInput } from 'components/backoffice/Inputs'

export enum FieldName {
  Address = 'address',
  Street = 'street',
  City = 'city',
  PostCode = 'postcode',
  Country = 'country',
}

export const FormLabel = {
  [FieldName.Address]: 'Address',
  [FieldName.Street]: 'Street',
  [FieldName.City]: 'City',
  [FieldName.PostCode]: 'PostCode',
  [FieldName.Country]: 'Country',
}

export const FormPlaceholder = {
  [FieldName.Address]: 'Type Address',
  [FieldName.Street]: 'Type Street',
  [FieldName.City]: 'Type City',
  [FieldName.PostCode]: 'Type PostCode',
  [FieldName.Country]: 'Type Country',
}

export const YupAddressValidationSchema = yup.object({
  //   [FieldName.Address]: yup.string(),
  [FieldName.Street]: yup.string().required(),
  [FieldName.City]: yup.string().required(),
  [FieldName.PostCode]: yup.string().required(),
  [FieldName.Country]: yup.string().required(),
})
export type YupAddressFormValues = InferType<typeof YupAddressValidationSchema>

export const Profile = () => {
  const methods = useForm<YupAddressFormValues>({
    defaultValues: {
      //   [FieldName.Address]: '',
      [FieldName.Street]: '',
      [FieldName.City]: '',
      [FieldName.PostCode]: '',
      [FieldName.Country]: '',
    },
    resolver: yupResolver(YupAddressValidationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const {
    formState: { errors: formErrors },
    setValue,
  } = methods
  console.log('formErrors', formErrors)

  const submit = ({ city }: YupAddressFormValues) => {
    console.log('address', city)
  }

  return (
    <Container maxW="1162px">
      <Flex w="full" justifyContent="space-between" mb="24px">
        <Text fontSize="32px" lineHeight="40px" color="backoffice.primary400">
          Profile
        </Text>
      </Flex>
      <AddressSearch
        id={FieldName.Address}
        label={FormLabel[FieldName.Address]}
        placeholder={FormPlaceholder[FieldName.Address]}
        onValueSelected={(value) => {
          if (value.city && value.street && value.postCode && value.country) {
            setValue(FieldName.City, value.city)
            setValue(FieldName.Street, value.street)
            setValue(FieldName.PostCode, value.postCode)
            setValue(FieldName.Country, value.country)
          }
        }}
      />
      <FormProvider {...methods}>
        <form style={{ width: '100%' }} onSubmit={methods.handleSubmit(submit)}>
          <VStack w="full">
            <FormTextInput
              id={FieldName.Street}
              label={FormLabel[FieldName.Street]}
              placeholder={FormPlaceholder[FieldName.Street]}
            />
            <FormTextInput
              id={FieldName.City}
              label={FormLabel[FieldName.City]}
              placeholder={FormPlaceholder[FieldName.City]}
            />
            <FormTextInput
              id={FieldName.PostCode}
              label={FormLabel[FieldName.PostCode]}
              placeholder={FormPlaceholder[FieldName.PostCode]}
            />
            <FormTextInput
              id={FieldName.Country}
              label={FormLabel[FieldName.Country]}
              placeholder={FormPlaceholder[FieldName.Country]}
            />
            <Button type="submit">Submit</Button>
          </VStack>
        </form>
      </FormProvider>
    </Container>
  )
}
