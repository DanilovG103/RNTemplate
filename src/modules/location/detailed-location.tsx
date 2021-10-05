import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/core'
import styled from 'styled-components/native'

import { useLocationQuery } from 'src/generated/graphql'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { CharacterCard } from 'src/ui/character-card'
import { DetailedContainer } from 'src/ui/detailed-container'

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

export const DetailedLocation = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { data } = useLocationQuery({ variables: { id: route?.params?.id } })

  useEffect(() => {
    navigation.setOptions({ title: route?.params?.name })
  }, [navigation, route])

  const EmptyData = () => (
    <EmptyDataWrapper>
      <NoResidents>No residents on this location</NoResidents>
    </EmptyDataWrapper>
  )

  return (
    <DetailedContainer
      title={data?.location?.name}
      firstInfo={data?.location?.type}
      secondInfo={data?.location?.dimension}>
      <Residents>Residents</Residents>
      <FlatList
        data={data?.location?.residents}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.id}
        numColumns={2}
        horizontal={false}
        renderItem={({ item }) => <CharacterCard character={item} />}
        ListEmptyComponent={EmptyData}
      />
    </DetailedContainer>
  )
}
