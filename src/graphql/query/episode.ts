import { gql } from '@apollo/client'

import { charactersField, episodeField, infoField } from '../fragments'

export const getEpisodes = gql`
  ${infoField}
  ${episodeField}
  query Episodes($page: Int, $name: String, $episode: String) {
    episodes(page: $page, filter: { name: $name, episode: $episode }) {
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
