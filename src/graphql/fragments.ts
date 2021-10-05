import { gql } from '@apollo/client'

export const charactersField = gql`
  fragment characters on Character {
    name
    status
    image
  }
`
