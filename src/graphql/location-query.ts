import { gql } from '@apollo/client'

import { characters } from './fragments'

const getLocations = gql`
  query Locations($page: Int) {
    locations(page: $page) {
      info {
        count
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
  ${characters}
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
