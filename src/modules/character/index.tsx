import React, { useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

import { useCharactersFilter } from 'src/context/character-filter'
import { useCharactersQuery } from 'src/generated/graphql'
import { CharacterCard } from 'src/ui/character-card'
import { Container } from 'src/ui/container'

export const CharacterScreen = () => {
  const [page, setPage] = useState(1)
  const { characterName: name, gender, status, species } = useCharactersFilter()
  const { data, fetchMore } = useCharactersQuery({
    variables: { page: 1, name, gender, status, species },
  })

  const loadMore = async () => {
    await fetchMore({
      variables: {
        page: page + 1,
      },

      updateQuery: (prevData, { fetchMoreResult }) => {
        return {
          characters: {
            results: [
              ...(prevData?.characters?.results ?? []),
              ...(fetchMoreResult?.characters?.results ?? []),
            ],
          },
        }
      },
    })
    setPage((prev) => prev + 1)
  }

  const renderCharacters = ({ item }) => {
    return <CharacterCard character={item} />
  }

  return (
    <Container title="Character">
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 120,
        }}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderCharacters}
        data={data?.characters?.results}
        keyExtractor={(item) => item?.id}
        onEndReached={loadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={<ActivityIndicator size="large" />}
      />
    </Container>
  )
}
