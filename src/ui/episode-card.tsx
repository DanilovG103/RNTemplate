import React from 'react'
import { View } from 'react-native'
import { Arrow } from 'assets/images/icons/Arrow'
import styled from 'styled-components/native'

import { EpisodeFragment } from 'src/generated/graphql'
import { Routes, useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

interface Props {
  episode: EpisodeFragment
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
  border-bottom-color: ${colors.gray[6]};
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
`

export const EpisodeCard = ({ episode }: Props) => {
  const { navigate } = useNavigation()

  return (
    <Card
      onPress={() =>
        navigate(Routes.DetailedEpisode, {
          id: episode.id,
          title: episode.name,
        })
      }>
      <View>
        <EpisodeTitle>{episode.episode}</EpisodeTitle>
        <Name>{episode.name}</Name>
        <Date>{episode.air_date}</Date>
      </View>
      <Arrow />
    </Card>
  )
}
