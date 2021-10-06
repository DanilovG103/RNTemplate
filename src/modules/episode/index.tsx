import React, { useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

import { useEpisodesQuery } from 'src/generated/graphql'
import { Container } from 'src/ui/container'
import { EpisodeCard } from 'src/ui/episode-card'

export const EpisodeScreen = () => {
  const [page, setPage] = useState(1)
  const { data, fetchMore } = useEpisodesQuery({ variables: { page: 1 } })

  const limit = data?.episodes?.results?.length === data?.episodes?.info?.count

  const loadMore = async () => {
    await fetchMore({
      variables: {
        page: page + 1,
      },

      updateQuery: (prevData, { fetchMoreResult }) => {
        return {
          episodes: {
            info: {
              count: data?.episodes?.info?.count,
            },
            results: [
              ...(prevData?.episodes?.results ?? []),
              ...(fetchMoreResult?.episodes?.results ?? []),
            ],
          },
        }
      },
    })
    setPage((prev) => prev + 1)
  }

  return (
    <Container title="Episode">
      <FlatList
        data={data?.episodes?.results ?? []}
        renderItem={({ item }) => <EpisodeCard episode={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.id}
        onEndReached={limit ? null : loadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={limit ? null : <ActivityIndicator size="large" />}
      />
    </Container>
  )
}
