import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LocationScreen } from 'src/modules/location'
import { DetailedLocation } from 'src/modules/location/detailed-location'

import { Header } from '../ui/header'
import { Routes } from './routes'

const Location = createNativeStackNavigator()

export const LocationStack = () => {
  return (
    <Location.Navigator initialRouteName={Routes.LocationScreen}>
      <Location.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
      />
      <Location.Screen
        name={Routes.DetailedLocation}
        component={DetailedLocation}
        options={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />
    </Location.Navigator>
  )
}
