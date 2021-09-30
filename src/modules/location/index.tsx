import React, { useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

import { useLocationsQuery } from 'src/generated/graphql'
import { Container } from 'src/ui/container'
import { LocationCard } from 'src/ui/location-card'

import { LocationRenderProps } from './types'

export const LocationScreen = () => {
  const [page, setPage] = useState(1)
  const { data, fetchMore } = useLocationsQuery({ variables: { page: 1 } })

  const loadMore = async () => {
    await fetchMore({
      variables: {
        page: page + 1,
      },

      updateQuery: (prevData, { fetchMoreResult }) => {
        return {
          locations: {
            results: [
              ...(prevData?.locations?.results ?? []),
              ...(fetchMoreResult?.locations?.results ?? []),
            ],
          },
        }
      },
    })
    setPage((prev) => prev + 1)
  }

  return (
    <Container title="Location">
      <FlatList
        data={data?.locations?.results ?? []}
        renderItem={({ item }) => <LocationCard location={item} />}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.id as string}
        onEndReached={loadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={<ActivityIndicator size="large" />}
      />
    </Container>
  )
}
