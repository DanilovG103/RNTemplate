import React, { useState } from 'react'
import { View } from 'react-native'
import { Arrow } from 'assets/images/icons/Arrow'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { InputName } from './input-name'
import { ModalMenu } from './modal'

const Wrapper = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 15px;
`

const HeaderTitle = styled.Text`
  color: ${colors.indigo};
  font-size: 17px;
  font-family: Montserrat-SemiBold;
`

const ModalTitle = styled.Text`
  font-size: 15px;
  font-family: Montserrat-Bold;
`

const ApplyBtn = styled.TouchableOpacity`
  background-color: ${colors.indigo};
  padding: 5px 10px;
  border-radius: 14px;
  position: absolute;
  right: 0;
`

const Apply = styled(HeaderTitle)`
  color: ${colors.white};
  font-size: 13px;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px;
`

const FilterBlock = styled.TouchableOpacity`
  flex-direction: row;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colors.gray[6]};
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
const FilterText = styled(HeaderTitle)`
  color: ${colors.black};
`
const FilterDescription = styled(ModalTitle)`
  font-family: Montserrat;
  color: ${colors.gray[0]};
`

const Circle = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  border: 1px solid ${colors.black};
  margin-right: 15px;
`

const FilterBlockStart = styled.View`
  flex-direction: row;
  align-items: center;
`

export const FilterHeader = () => {
  const [visible, setVisible] = useState(false)
  const [inputVisible, setInputVisible] = useState(false)

  return (
    <Wrapper onPress={() => setVisible(true)}>
      <HeaderTitle>Filter</HeaderTitle>
      <ModalMenu showModal={visible} setShowModal={setVisible}>
        <Row>
          <ModalTitle>Filter</ModalTitle>
          <ApplyBtn>
            <Apply>APPLY</Apply>
          </ApplyBtn>
        </Row>
        <FilterBlock onPress={() => setInputVisible(true)}>
          <FilterBlockStart>
            <Circle />
            <View>
              <FilterText>Name</FilterText>
              <FilterDescription>Give a name</FilterDescription>
            </View>
          </FilterBlockStart>
          <Arrow />
        </FilterBlock>
        <FilterBlock>
          <FilterBlockStart>
            <Circle />
            <View>
              <FilterText>Episode</FilterText>
              <FilterDescription>Select one</FilterDescription>
            </View>
          </FilterBlockStart>
          <Arrow />
        </FilterBlock>
        <InputName visible={inputVisible} setVisible={setInputVisible} />
      </ModalMenu>
    </Wrapper>
  )
}
