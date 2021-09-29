import React, { useState } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { useCharactersQuery } from 'src/generated/graphql'

import { CharacterCard } from '../../ui/Card'

const Container = styled.View`
  padding: 25px 15px 45px;
`

const Title = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 34px;
`

export const CharacterScreen = () => {
  const [page, setPage] = useState(1)
  const { data } = useCharactersQuery({
    variables: { page, name: '' },
  })

  const loadMore = () => {
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
        data={data?.characters.results}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={1}
      />
    </Container>
  )
}
