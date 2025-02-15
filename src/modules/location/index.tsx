import React, { useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

import { useLocationsFilter } from 'src/context/location-filter'
import { useLocationsQuery } from 'src/generated/graphql'
import { Container } from 'src/ui/container'
import { LocationCard } from 'src/ui/location-card'

export const LocationScreen = () => {
  const [page, setPage] = useState(1)
  const { name, type, dimension } = useLocationsFilter()
  const { data, fetchMore } = useLocationsQuery({
    variables: { page: 1, name, type, dimension },
  })

  const limit =
    data?.locations?.results?.length === data?.locations?.info?.count

  const loadMore = async () => {
    await fetchMore({
      variables: {
        page: page + 1,
      },

      updateQuery: (prevData, { fetchMoreResult }) => {
        return {
          locations: {
            info: {
              count: prevData.locations?.info?.count,
            },
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
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={data?.locations?.results ?? []}
        renderItem={({ item }) => <LocationCard location={item} />}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.id as string}
        onEndReached={limit ? null : loadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={limit ? null : <ActivityIndicator size="large" />}
      />
    </Container>
  )
}
