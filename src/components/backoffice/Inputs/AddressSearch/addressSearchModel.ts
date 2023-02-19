import { ApolloClient } from '@apollo/client'
import {
  AddressWithPostcodeByPlaceIdDocument,
  AddressWithPostcodeByPlaceIdQuery,
  AddressWithPostcodeByPlaceIdQueryVariables,
  GoogleAddress,
} from 'generated/generated-graphql'
import * as yup from 'yup'

export type AddressYupSchemaOnValidateReturn = GoogleAddress

export const AddressYupSchema = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  apolloClient: ApolloClient<object>,
  googlePlacesSessionToken: string,
  onValidate: (address: AddressYupSchemaOnValidateReturn | null) => void
) =>
  yup
    .object({
      placeId: yup
        .string()
        .required('Please select address from the options')
        .test(
          'address-is-insufficient',
          'Address is not sufficient',
          async (placeId) => {
            if (placeId) {
              const { data } = await apolloClient.query<
                AddressWithPostcodeByPlaceIdQuery,
                AddressWithPostcodeByPlaceIdQueryVariables
              >({
                query: AddressWithPostcodeByPlaceIdDocument,
                fetchPolicy: 'network-only',
                variables: { input: { placeId, googlePlacesSessionToken } },
              })
              onValidate(
                data?.addressByPlaceId
                  ? {
                      postCode: data.addressByPlaceId.postCode,
                      placeName: data.addressByPlaceId.placeName,
                      placeId: data.addressByPlaceId.placeId,
                      coordinates: data.addressByPlaceId.coordinates,
                    }
                  : null
              )
              return !!data?.addressByPlaceId?.postCode
            }
            onValidate(null)
            return false
          }
        ),
      placeName: yup.string().required(),
    })
    .defined()

export const AddressYupSchemaOptional = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  apolloClient: ApolloClient<object>,
  googlePlacesSessionToken: string,
  onValidate: (address: AddressYupSchemaOnValidateReturn | null) => void
) =>
  yup
    .object({
      placeId: yup
        .string()
        .test(
          'address-is-insufficient',
          'Address is not sufficient',
          async (placeId) => {
            if (placeId) {
              const { data } = await apolloClient.query<
                AddressWithPostcodeByPlaceIdQuery,
                AddressWithPostcodeByPlaceIdQueryVariables
              >({
                query: AddressWithPostcodeByPlaceIdDocument,
                fetchPolicy: 'network-only',
                variables: { input: { placeId, googlePlacesSessionToken } },
              })
              onValidate(
                data?.addressByPlaceId
                  ? {
                      postCode: data.addressByPlaceId.postCode,
                      placeName: data.addressByPlaceId.placeName,
                      placeId: data.addressByPlaceId.placeId,
                      coordinates: data.addressByPlaceId.coordinates,
                    }
                  : null
              )
              return !!data?.addressByPlaceId?.postCode
            }
            onValidate(null)
            return true
          }
        ),
      placeName: yup.string(),
    })
    .optional()

export const getDefaultAddressFormValue = ({
  placeId,
  placeName,
}: {
  placeId?: string | null
  placeName?: string | null
}) =>
  placeId && placeName
    ? {
        placeId,
        placeName,
      }
    : undefined
