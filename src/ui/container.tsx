import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  padding: 25px 15px 45px;
  align-items: center;
`

const Title = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 34px;
  align-self: flex-start;
`

interface Props {
  title: string
  children: ReactNode
}

export const Container = ({ title, children }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}
