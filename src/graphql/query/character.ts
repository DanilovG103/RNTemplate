import { gql } from '@apollo/client'

const getCharacters = gql`
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
        id
        name
        image
        status
        gender
        location {
          name
        }
      }
    }
  }
`

export { getCharacters }
