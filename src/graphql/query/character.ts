import { gql } from '@apollo/client'

import {
  charactersField,
  detailedCharacterField,
  locationField,
} from '../fragments'

const getCharacters = gql`
  ${charactersField}
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        gender
        ...characters
        location {
          name
        }
      }
    }
  }
`

const getCharacter = gql`
  ${locationField}
  ${detailedCharacterField}
  query Character($id: ID!) {
    character(id: $id) {
      ...detailedCharacter
      location {
        ...locationField
      }
    }
  }
`

export { getCharacters, getCharacter }
