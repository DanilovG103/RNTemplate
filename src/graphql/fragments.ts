import { gql } from '@apollo/client'

export const charactersField = gql`
  fragment characters on Character {
    id
    name
    status
    image
  }
`

export const infoField = gql`
  fragment infoField on Info {
    count
  }
`

export const episodeField = gql`
  fragment episode on Episode {
    id
    name
    episode
    air_date
  }
`

export const locationField = gql`
  fragment locationField on Location {
    id
    name
    type
    dimension
  }
`
