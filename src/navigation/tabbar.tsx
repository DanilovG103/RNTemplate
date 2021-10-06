import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CharacterIcon } from 'assets/images/icons/Character'
import { EpisodeIcon } from 'assets/images/icons/Episode'
import { LocationIcon } from 'assets/images/icons/Location'

import { colors } from '../theme/colors'
import { CharacterStack } from './character-stack'
import { EpisodeStack } from './episode-stack'
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
        name={Routes.CharacterStack}
        component={CharacterStack}
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
        name={Routes.EpisodeStack}
        component={EpisodeStack}
        options={{
          tabBarLabel: 'Episode',
          tabBarIcon: ({ focused }) => <EpisodeIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}
