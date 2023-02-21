// import { addressByPlaceId } from './queries/addressByPlaceId'
import { createOrUpdateAddress } from './mutations/createOrUpdateAddress'
import { places } from './queries/places'

export default {
  Query: {
    places,
  },
  Mutation: {
    createOrUpdateAddress,
  },
}
