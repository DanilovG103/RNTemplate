import { gql } from '@apollo/client'

const getLocations = gql`
  query Locations($page: Int) {
    locations(page: $page) {
      results {
        id
        name
        type
      }
    }
  }
`

export { getLocations }
