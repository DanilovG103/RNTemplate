import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { Location } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

const Card = styled.View`
  border: 1px solid ${colors.lightGray};
  max-width: 155px;
  width: ${Dimensions.get('window').width - 150}px;
  border-radius: 8px;
  margin: 5px;
  padding: 5px 15px 15px;
`

const Type = styled.Text`
  color: ${colors.additional};
  font-size: 11px;
`

const LocationName = styled.Text`
  font-size: 17px;
  color: ${colors.dark};
  font-family: Montserrat-SemiBold;
`
interface Props {
  location: Location
}

export const LocationCard = ({ location }: Props) => {
  return (
    <Card>
      <Type>{location.type}</Type>
      <LocationName>{location.name}</LocationName>
    </Card>
  )
}
