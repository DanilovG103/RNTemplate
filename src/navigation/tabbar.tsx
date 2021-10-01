import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'

import { CharacterIcon } from '../../assets/images/icons/Character'
import { EpisodeIcon } from '../../assets/images/icons/Episode'
import { LocationIcon } from '../../assets/images/icons/Location'
import { colors } from '../theme/colors'
import { LocationStack } from './location-stack'
import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.indigo,
      }}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          tabBarLabel: 'Characters',
          tabBarIcon: ({ focused }) => <CharacterIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationStack}
        component={LocationStack}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ focused }) => <LocationIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          tabBarLabel: 'Episode',
          tabBarIcon: ({ focused }) => <EpisodeIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}
