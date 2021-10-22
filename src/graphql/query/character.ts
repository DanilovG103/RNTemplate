import { gql } from '@apollo/client'

import {
  charactersField,
  detailedCharacterField,
  episodeField,
  locationField,
} from '../fragments'

const getCharacters = gql`
  ${charactersField}
  query Characters(
    $page: Int
    $name: String
    $species: String
    $gender: String
    $status: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        gender: $gender
        species: $species
      }
    ) {
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
  ${episodeField}
  query Character($id: ID!) {
    character(id: $id) {
      ...detailedCharacter
      location {
        ...locationField
      }
      episode {
        ...episode
      }
      origin {
        name
      }
    }
  }
`

export { getCharacters, getCharacter }
