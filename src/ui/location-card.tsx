import React from 'react'
import styled from 'styled-components/native'

import { Location, LocationFieldFragment } from 'src/generated/graphql'
import { Routes, useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

const Card = styled.TouchableOpacity`
  border: 1px solid ${colors.gray[2]};
  border-radius: 8px;
  margin: 5px;
  padding: 5px 15px 15px;
  width: 150px;
`

const Type = styled.Text`
  color: ${colors.gray[0]};
  font-size: 11px;
`

const LocationName = styled.Text`
  font-size: 17px;
  color: ${colors.dark};
  font-family: Montserrat-SemiBold;
`
interface Props {
  location: LocationFieldFragment
}

export const LocationCard = ({ location }: Props) => {
  const { navigate } = useNavigation()

  return (
    <Card
      onPress={() =>
        navigate(Routes.LocationStack, {
          screen: Routes.DetailedLocation,
          params: {
            id: location?.id,
            title: location?.name,
          },
        })
      }>
      <Type>{location?.type}</Type>
      <LocationName numberOfLines={1}>{location?.name}</LocationName>
    </Card>
  )
}
