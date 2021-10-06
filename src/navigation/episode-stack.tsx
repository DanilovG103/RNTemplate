import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { EpisodeScreen } from 'src/modules/episode'
import { DetailedEpisode } from 'src/modules/episode/detailed-episode'
import { BackButton } from 'src/ui/back-button'

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
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton />,
        }}
      />
    </Episode.Navigator>
  )
}
