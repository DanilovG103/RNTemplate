import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/core'
import styled from 'styled-components/native'

import { useLocationQuery } from 'src/generated/graphql'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { CharacterCard } from 'src/ui/character-card'
import { DetailedContainer } from 'src/ui/detailed-container'

import { Params } from './types'

const Residents = styled.Text`
  align-self: flex-start;
  font-size: 20px;
  font-family: Montserrat-Bold;
  margin: 15px 20px 0;
  color: ${colors.gray[5]};
`

const NoResidents = styled.Text`
  color: ${colors.dark};
  font-size: 16px;
  font-family: Montserrat-SemiBold;
`

const EmptyDataWrapper = styled.View`
  margin: 25px;
`

const Wrapper = styled.View`
  align-items: center;
`

export const DetailedLocation = () => {
  const navigation = useNavigation()
  const { params } = useRoute()
  const { data } = useLocationQuery({
    variables: { id: (params as Params).id },
  })

  useEffect(() => {
    navigation.setOptions({
      title: `${(params as Params).title.slice(0, 15)}...`,
    })
  }, [navigation, params])

  const EmptyData = () => (
    <EmptyDataWrapper>
      <NoResidents>No residents on this location</NoResidents>
    </EmptyDataWrapper>
  )

  return (
    <DetailedContainer
      title={data?.location?.name ?? ''}
      firstInfo={data?.location?.type ?? ''}
      secondInfo={data?.location?.dimension ?? ''}>
      <Residents>Residents</Residents>
      <Wrapper>
        <FlatList
          data={data?.location?.residents}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item?.id}
          numColumns={2}
          horizontal={false}
          renderItem={({ item }) => <CharacterCard character={item} />}
          ListEmptyComponent={EmptyData}
        />
      </Wrapper>
    </DetailedContainer>
  )
}
