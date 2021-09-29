import React, { useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import styled from 'styled-components/native'

import { useCharactersQuery } from 'src/generated/graphql'
import { CharacterCard } from 'src/ui/character-card'

const Container = styled.View`
  padding: 25px 15px 45px;
`

const Title = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 34px;
`

export const CharacterScreen = () => {
  const [page, setPage] = useState(1)
  const { data, fetchMore } = useCharactersQuery({
    variables: { page: 1, name: '' },
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
    <Container>
      <Title>Character</Title>
      <FlatList
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
