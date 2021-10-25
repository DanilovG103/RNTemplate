import React, { useState } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { ModalMenu } from 'src/ui/modal'

const Wrapper = styled.TouchableOpacity`
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
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
`

const Apply = styled(HeaderTitle)`
  color: ${colors.white};
  font-size: 13px;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
`

const FilterSelected = styled.View`
  width: 12px;
  height: 12px;
  background: ${colors.indigo};
  border-radius: 6px;
  margin-right: 5px;
`

interface Props {
  children: React.ReactNode
  onPress: () => void
  filtersSelected: boolean
}

export const FilterContainer = ({
  children,
  onPress,
  filtersSelected,
}: Props) => {
  const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView>
      <Wrapper onPress={() => setVisible(true)}>
        {filtersSelected && <FilterSelected />}
        <HeaderTitle>Filter</HeaderTitle>
        <ModalMenu showModal={visible} setShowModal={setVisible}>
          <Row>
            <TouchableOpacity onPress={onPress}>
              <HeaderTitle>Clear</HeaderTitle>
            </TouchableOpacity>
            <ModalTitle>Filter</ModalTitle>
            <ApplyBtn>
              <Apply>APPLY</Apply>
            </ApplyBtn>
          </Row>
          {children}
        </ModalMenu>
      </Wrapper>
    </SafeAreaView>
  )
}
