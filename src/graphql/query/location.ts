import { gql } from '@apollo/client'

import { charactersField, infoField } from '../fragments'

const getLocations = gql`
  ${infoField}
  query Locations($page: Int) {
    locations(page: $page) {
      info {
        ...infoField
      }
      results {
        id
        name
        type
        created
        dimension
        residents {
          name
        }
      }
    }
  }
`

const getLocation = gql`
  ${charactersField}
  query Location($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        ...characters
      }
    }
  }
`

export { getLocations, getLocation }
