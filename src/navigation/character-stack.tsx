import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CharacterScreen } from 'src/modules/character'
import { DetailedCharacter } from 'src/modules/character/detailed-character'
import { Routes } from 'src/navigation/routes'
import { FilterCharacters } from 'src/ui/filter-characters'
import { Header } from 'src/ui/header'

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
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />
    </Character.Navigator>
  )
}
