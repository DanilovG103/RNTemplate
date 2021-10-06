import React from 'react'
import { BackArrow } from 'assets/images/icons/BackArrow'
import styled from 'styled-components/native'

import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

const Back = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

const BackText = styled.Text`
  font-size: 17px;
  color: ${colors.indigo};
  margin: 0 8px;
`

export const HeaderLeft = () => {
  const { goBack } = useNavigation()

  return (
    <Back onPress={goBack}>
      <BackArrow />
      <BackText>Back</BackText>
    </Back>
  )
}
