import { gql } from '@apollo/client'

import { charactersField, episodeField, infoField } from '../fragments'

export const getEpisodes = gql`
  ${infoField}
  ${episodeField}
  query Episodes($page: Int) {
    episodes(page: $page) {
      info {
        ...infoField
      }
      results {
        id
        ...episode
      }
    }
  }
`

export const getEpisode = gql`
  ${charactersField}
  ${episodeField}
  query Episode($id: ID!) {
    episode(id: $id) {
      ...episode
      characters {
        ...characters
      }
    }
  }
`
