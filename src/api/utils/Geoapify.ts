import { InternalError } from 'api/utils/graphqlErrors'
import { GeoapifyApiResponse } from 'generated/generated-graphql'
// import logger from './logger'

type Feature = {
  type: string
  properties: GeoapifyApiResponse
}

type GeoapifyAutoCompleteResponse = {
  type: string
  features: [Feature]
}

const getGeoapifyArgs = () => {
  const { GEOAPIFY_API_KEY, GEOAPIFY_API_BASE_URL } = process.env

  if (!GEOAPIFY_API_KEY || !GEOAPIFY_API_BASE_URL) {
    console.error(
      'GOOGLE_PLACES_BASE_API_URL or GOOGLE_PLACES_API_KEY is missing in environment'
    )
    throw new InternalError()
  }

  return { GEOAPIFY_API_KEY, GEOAPIFY_API_BASE_URL }
}

const request = async <T>(path: string) => {
  const { GEOAPIFY_API_KEY, GEOAPIFY_API_BASE_URL } = getGeoapifyArgs()
  const requestOptions = {
    method: 'GET',
  }

  const response = await fetch(
    `${GEOAPIFY_API_BASE_URL}${path}&apiKey=${GEOAPIFY_API_KEY}`,
    requestOptions
  )
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = <T>await response.json()

  return data
}

const autocomplete = async ({ searchQuery }: { searchQuery: string }) => {
  const path = `autocomplete?text=${searchQuery}&bias=countrycode:sk`

  return request<GeoapifyAutoCompleteResponse>(path)
}

export const GeoapifyApi = {
  autocomplete,
}
