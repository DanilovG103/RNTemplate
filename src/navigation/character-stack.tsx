import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CharacterScreen } from 'src/modules/character'
import { DetailedCharacter } from 'src/modules/character/detailed-character'
import { BackButton } from 'src/ui/back-button'
import { FilterCharacters } from 'src/ui/filter-characters'

import { Routes } from './routes'

const Character = createNativeStackNavigator()

export const CharacterStack = () => {
  return (
    <Character.Navigator initialRouteName={Routes.CharacterScreen}>
      <Character.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{ header: () => <FilterCharacters /> }}
      />
      <Character.Screen
        name={Routes.DetailedCharacter}
        component={DetailedCharacter}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton />,
        }}
      />
    </Character.Navigator>
  )
}
