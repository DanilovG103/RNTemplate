import React from 'react'
import { BackArrow } from 'assets/images/icons/BackArrow'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Back = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`

const BackText = styled.Text`
  font-size: 17px;
  color: ${colors.indigo};
  margin: 0 8px;
`

const Title = styled.Text`
  font-family: Montserrat-SemiBold;
  color: ${colors.dark};
  margin: 0 40px;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const TitleBlock = styled.View`
  width: 200px;
`

export const Header = ({ route, navigation }) => {
  return (
    <Row>
      <Back onPress={navigation.goBack}>
        <BackArrow />
        <BackText>Back</BackText>
      </Back>
      <TitleBlock>
        <Title numberOfLines={1}>{route.params.name}</Title>
      </TitleBlock>
    </Row>
  )
}
