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
  margin-bottom: 10px;
  justify-content: space-around;
  width: 82%;
`

const Back = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
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

const TitleWrapper = styled.View`
  width: 150px;
`

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, string>
}

interface Params {
  params: {
    title: string
  }
}

export const Header = ({ navigation }: Props) => {
  const { params } = useRoute()

  return (
    <Wrapper>
      <Back onPress={navigation.goBack}>
        <BackArrow />
        <BackText>Back</BackText>
      </Back>
      <TitleWrapper>
        <Title numberOfLines={1}>{(params as Params).params.title}</Title>
      </TitleWrapper>
    </Wrapper>
  )
}
