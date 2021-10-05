import React from 'react'
import { View } from 'react-native'
import { Arrow } from 'assets/images/icons/Arrow'
import styled from 'styled-components/native'

import { Episode } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

interface Props {
  episode: Episode
}

const EpisodeTitle = styled.Text`
  font-family: Montserrat-SemiBold;
  font-size: 17px;
  color: ${colors.dark};
`

const Name = styled.Text`
  font-family: Montserrat;
  font-size: 15px;
  color: ${colors.gray[0]};
`

const Date = styled(EpisodeTitle)`
  font-size: 11px;
  color: ${colors.gray[5]};
`

const Card = styled.TouchableOpacity`
  border-bottom-width: 1px;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
`

export const EpisodeCard = ({ episode }: Props) => {
  return (
    <Card>
      <View>
        <EpisodeTitle>{episode.episode}</EpisodeTitle>
        <Name>{episode.name}</Name>
        <Date>{episode.air_date}</Date>
      </View>
      <Arrow />
    </Card>
  )
}
