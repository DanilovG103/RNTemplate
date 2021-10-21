import React from 'react'
import { View } from 'react-native'
import { Arrow } from 'assets/images/icons/Arrow'
import styled from 'styled-components/native'

import { CharacterQuery } from 'src/generated/graphql'
import { Routes, useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

interface Props {
  info?: CharacterQuery
}

const InfoTitle = styled.Text`
  font-family: Montserrat-SemiBold;
  font-size: 17px;
  color: ${colors.dark};
`
const InfoDescription = styled.Text`
  color: ${colors.gray[0]};
  font-family: Montserrat;
  font-size: 15px;
`

const Wrapper = styled.View`
  padding: 0 20px;
`

const Line = styled.View`
  background: ${colors.gray[6]};
  height: 1px;
  width: 100%;
  margin: 5px 0;
`

const LocationBlock = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CharacterInfo = ({ info }: Props) => {
  const { navigate } = useNavigation()

  return (
    <Wrapper>
      <InfoTitle>Gender</InfoTitle>
      <InfoDescription>{info?.character.gender}</InfoDescription>
      <Line />
      <InfoTitle>Origin</InfoTitle>
      <InfoDescription>{info?.character.origin.name}</InfoDescription>
      <Line />
      <InfoTitle>Type</InfoTitle>
      <InfoDescription>{info?.character.type || 'Unknown'}</InfoDescription>
      <Line />
      <LocationBlock
        onPress={() =>
          navigate(Routes.LocationStack, {
            screen: Routes.DetailedLocation,
            params: {
              id: info?.character.location.id,
              title: info?.character.location.name,
            },
          })
        }>
        <View>
          <InfoTitle>Location</InfoTitle>
          <InfoDescription>{info?.character.location.name}</InfoDescription>
        </View>
        <Arrow />
      </LocationBlock>
    </Wrapper>
  )
}
