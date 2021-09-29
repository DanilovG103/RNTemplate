import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  padding: 15px;
`

const Title = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 34px;
`

export const CharacterScreen = () => {
  return (
    <Container>
      <Title>Character</Title>
    </Container>
  )
}
