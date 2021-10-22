import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CharacterScreen } from 'src/modules/character'
import { DetailedCharacter } from 'src/modules/character/detailed-character'

import { Header } from '../ui/header'
import { Routes } from './routes'

const Character = createNativeStackNavigator()

export const CharacterStack = () => {
  return (
    <Character.Navigator initialRouteName={Routes.CharacterScreen}>
      <Character.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
      />
      <Character.Screen
        name={Routes.DetailedCharacter}
        component={DetailedCharacter}
        options={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />
    </Character.Navigator>
  )
}
