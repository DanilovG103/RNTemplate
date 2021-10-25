import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Background = styled.SafeAreaView`
  align-items: center;
`

const Title = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 34px;
  align-self: flex-start;
  margin: 15px;
`

const Wrapper = styled.View`
  width: 100%;
  background-color: ${colors.white};
`

interface Props {
  title: string
  children: ReactNode
}

export const Container = ({ title, children }: Props) => {
  return (
    <Background>
      <Title>{title}</Title>
      <Wrapper>{children}</Wrapper>
    </Background>
  )
}
