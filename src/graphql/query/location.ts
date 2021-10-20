import { gql } from '@apollo/client'

import { charactersField, infoField, locationField } from '../fragments'

const getLocations = gql`
  ${infoField}
  ${locationField}
  query Locations(
    $page: Int
    $name: String
    $type: String
    $dimension: String
  ) {
    locations(
      page: $page
      filter: { name: $name, type: $type, dimension: $dimension }
    ) {
      info {
        ...infoField
      }
      results {
        ...locationField
        created
        residents {
          name
        }
      }
    }
  }
`

const getLocation = gql`
  ${charactersField}
  ${locationField}
  query Location($id: ID!) {
    location(id: $id) {
      ...locationField
      residents {
        ...characters
      }
    }
  }
`

export { getLocations, getLocation }
