import { gql } from '@apollo/client'

export const characters = gql`
  fragment characters on Character {
    name
    status
    image
  }
`
