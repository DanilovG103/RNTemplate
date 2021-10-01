import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { useNavigation } from 'src/navigation/routes'

const Back = styled.TouchableOpacity``

export const Header = ({ route }) => {
  const navigation = useNavigation()

  return (
    <Back onPress={() => navigation.goBack()}>
      <Text>Back</Text>
    </Back>
  )
}
