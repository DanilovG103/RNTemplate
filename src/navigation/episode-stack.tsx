import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { EpisodeScreen } from 'src/modules/episode'
import { DetailedEpisode } from 'src/modules/episode/detailed-episode'
import { Header } from 'src/ui/header'

import { Routes } from './routes'

const Episode = createNativeStackNavigator()

export const EpisodeStack = () => {
  return (
    <Episode.Navigator initialRouteName={Routes.EpisodeScreen}>
      <Episode.Screen name={Routes.EpisodeScreen} component={EpisodeScreen} />
      <Episode.Screen
        name={Routes.DetailedEpisode}
        component={DetailedEpisode}
        options={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />
    </Episode.Navigator>
  )
}
