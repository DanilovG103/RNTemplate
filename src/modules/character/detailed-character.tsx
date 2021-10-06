import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, View, VirtualizedList } from 'react-native'
import { useRoute } from '@react-navigation/core'
import styled from 'styled-components/native'

import { useCharacterQuery } from 'src/generated/graphql'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { CharacterInfo } from 'src/ui/character-info'
import { DetailedContainer } from 'src/ui/detailed-container'
import { EpisodeCard } from 'src/ui/episode-card'

import { Params } from './types'

const Info = styled.Text`
  align-self: flex-start;
  font-size: 20px;
  font-family: Montserrat-Bold;
  margin: 15px 20px 0;
  color: ${colors.gray[5]};
`

export const DetailedCharacter = () => {
  const { setOptions } = useNavigation()
  const { params } = useRoute()

  const { data } = useCharacterQuery({
    variables: { id: (params as Params).id },
  })

  useEffect(() => {
    setOptions({ title: (params as Params).title })
  }, [setOptions, params])

  return (
    <DetailedContainer
      imageUri={data?.character.image}
      firstInfo={data?.character.status ?? ''}
      secondInfo={data?.character.species ?? ''}
      title={data?.character.name ?? ''}>
      <Info>Informations</Info>
      <CharacterInfo info={data} />
      <Info>Episodes</Info>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={data?.character.episode}
          renderItem={({ item }) => <EpisodeCard episode={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </DetailedContainer>
  )
}
