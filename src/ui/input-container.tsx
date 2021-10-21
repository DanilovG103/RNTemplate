import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { ModalMenu } from 'src/ui/modal'

const Wrapper = styled.View`
  margin: 15px;
`

const Title = styled.Text`
  color: ${colors.black};
  font-size: 17px;
  font-family: Montserrat-SemiBold;
  align-self: center;
`

const Input = styled.TextInput`
  color: ${colors.black};
  border-radius: 10px;
  border: 1px solid ${colors.gray[6]};
  margin-top: 10px;
  padding: 5px 10px;
`

interface Props {
  visible: boolean
  title: string
  setVisible: (value: boolean) => void
  onChangeText: (value: string) => void
}

export const InputContainer = ({
  visible,
  setVisible,
  onChangeText,
  title,
}: Props) => {
  return (
    <ModalMenu showModal={visible} setShowModal={setVisible}>
      <Wrapper>
        <Title>{title}</Title>
        <Input
          placeholder="Search"
          placeholderTextColor={colors.gray[0]}
          onChangeText={onChangeText}
        />
      </Wrapper>
    </ModalMenu>
  )
}
