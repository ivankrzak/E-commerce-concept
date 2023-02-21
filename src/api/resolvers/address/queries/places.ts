import { GeoapifyAddress, QueryPlacesArgs } from 'api/generated/resolvers-types'
import { GeoapifyApi } from 'api/utils/GeoapifyApi'

export const places = async (
  _: unknown,
  { input: { searchQuery } }: QueryPlacesArgs
) => {
  const geoapifyPredictions = await GeoapifyApi.autocomplete({ searchQuery })

  return geoapifyPredictions.features.map(
    ({ properties }) =>
      ({
        country: properties.country,
        countryCode: properties.country_code,
        state: properties.state,
        county: properties.county,
        city: properties.city,
        postCode: properties.postcode,
        district: properties.district,
        street: properties.street,
        houseNumber: properties.housenumber,
        lon: properties.lon,
        lat: properties.lat,
        stateCode: properties.state_code,
        formatted: properties.formatted,
        addressLine1: properties.address_line1,
        addressLine2: properties.address_line2,
        placeId: properties.place_id,
      } as GeoapifyAddress)
  )
}
