import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { CharacterQuery } from 'src/generated/graphql'
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

export const CharacterInfo = ({ info }: Props) => {
  return (
    <View>
      <InfoTitle>Gender</InfoTitle>
      <InfoDescription>{info?.character.gender}</InfoDescription>
      <InfoTitle>Origin</InfoTitle>
      <InfoDescription>{info?.character.origin.name}</InfoDescription>
      <InfoTitle>Type</InfoTitle>
      <InfoDescription>{info?.character.type || 'Unknown'}</InfoDescription>
      <InfoTitle>Location</InfoTitle>
      <InfoDescription>{info?.character.location.name}</InfoDescription>
    </View>
  )
}
