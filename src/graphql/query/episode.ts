import { gql } from '@apollo/client'

import { infoField } from '../fragments'

export const getEpisodes = gql`
  ${infoField}
  query Episodes($page: Int) {
    episodes(page: $page) {
      info {
        ...info
      }
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`
