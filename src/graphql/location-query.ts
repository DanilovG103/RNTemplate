import { gql } from '@apollo/client'

const getLocations = gql`
  query Locations($page: Int) {
    locations(page: $page) {
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
  query Location($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        name
        status
        image
      }
    }
  }
`

export { getLocations, getLocation }
