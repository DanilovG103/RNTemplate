import { gql } from '@apollo/client'

import { charactersField, infoField } from '../fragments'
import { locationField } from './../fragments'

const getLocations = gql`
  ${infoField}
  ${locationField}
  query Locations($page: Int) {
    locations(page: $page) {
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
