import React from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { useLocationQuery } from 'src/generated/graphql'
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
  margin: auto;
`

export const DetailedLocation = ({ route }) => {
  const { data } = useLocationQuery({ variables: { id: route.params.id } })

  return (
    <Background>
      <Block>
        <Type>{data?.location?.type}</Type>
        <Name>{data?.location?.name}</Name>
        <Dimension>{data?.location?.dimension}</Dimension>
      </Block>
      <Residents>Residents</Residents>
      {data?.location?.residents.length === 0 ? (
        <NoResidents>No residents on this location</NoResidents>
      ) : (
        <FlatList
          data={data?.location?.residents}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item?.id}
          numColumns={2}
          horizontal={false}
          renderItem={({ item }) => <CharacterCard character={item} />}
        />
      )}
    </Background>
  )
}
