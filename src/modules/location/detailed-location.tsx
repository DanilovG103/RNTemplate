import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/core'
import styled from 'styled-components/native'

import { useLocationQuery } from 'src/generated/graphql'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { CharacterCard } from 'src/ui/character-card'

const Background = styled.View`
  background: ${colors.gray[4]};
  flex: 1;
  align-items: center;
`

const Block = styled.View`
  background: ${colors.gray[3]};
  align-items: center;
  padding: 30px;
  width: 100%;
`

const Type = styled.Text`
  font-size: 11px;
  color: ${colors.gray[0]};
  font-family: Montserrat;
`

const Name = styled.Text`
  color: ${colors.dark};
  font-size: 28px;
  font-family: Montserrat-Bold;
  text-align: center;
`

const Dimension = styled.Text`
  color: ${colors.gray[5]};
  font-size: 13px;
  font-family: Montserrat-SemiBold;
`

const Residents = styled(Dimension)`
  align-self: flex-start;
  font-size: 20px;
  font-family: Montserrat-Bold;
  margin: 15px 20px 0;
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
    <Background>
      <Block>
        <Type>{data?.location?.type}</Type>
        <Name>{data?.location?.name}</Name>
        <Dimension>{data?.location?.dimension}</Dimension>
      </Block>
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
    </Background>
  )
}
