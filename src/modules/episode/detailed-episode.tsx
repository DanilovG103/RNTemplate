import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/core'
import styled from 'styled-components/native'

import { useEpisodeQuery } from 'src/generated/graphql'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { CharacterCard } from 'src/ui/character-card'
import { DetailedContainer } from 'src/ui/detailed-container'

import { Params } from './types'

const Characters = styled.Text`
  align-self: flex-start;
  font-size: 20px;
  font-family: Montserrat-Bold;
  margin: 15px 20px 0;
  color: ${colors.gray[5]};
`

const Wrapper = styled.View`
  align-items: center;
`

export const DetailedEpisode = () => {
  const navigation = useNavigation()
  const { params } = useRoute()
  const { data } = useEpisodeQuery({
    variables: { id: (params as Params).id },
  })

  useEffect(() => {
    navigation.setOptions({
      title: (params as Params).title,
    })
  }, [params, navigation])

  return (
    <DetailedContainer
      title={data?.episode?.name ?? ''}
      firstInfo={data?.episode?.air_date ?? ''}
      secondInfo={data?.episode?.episode ?? ''}>
      <Characters>Characters</Characters>
      <Wrapper>
        <FlatList
          data={data?.episode?.characters}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => <CharacterCard character={item} />}
        />
      </Wrapper>
    </DetailedContainer>
  )
}
