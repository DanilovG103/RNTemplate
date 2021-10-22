import React from 'react'
import { useRoute } from '@react-navigation/core'
import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BackArrow } from 'assets/images/icons/BackArrow'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`

const Back = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  left: 25px;
  top: 45px;
`

const BackText = styled.Text`
  font-size: 17px;
  color: ${colors.indigo};
  margin: 0 8px;
`

const Title = styled.Text`
  font-size: 15px;
  color: ${colors.dark};
  font-family: Montserrat-SemiBold;
`

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, string>
}

export const BackButton = ({ navigation }: Props) => {
  const { params } = useRoute()

  return (
    <Wrapper>
      <Back onPress={navigation.goBack}>
        <BackArrow />
        <BackText>Back</BackText>
      </Back>
      <Title>{params.params.title}</Title>
    </Wrapper>
  )
}
