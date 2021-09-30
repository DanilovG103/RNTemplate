import React from 'react'
import styled from 'styled-components/native'

import { Character } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

const Card = styled.View`
  border-radius: 8px;
  margin: 7px;
  padding-bottom: 5px;
  border: 1px solid ${colors.white};
`

const Name = styled.Text`
  font-family: Montserrat-SemiBold;
  font-size: 17px;
`

const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  resize-mode: contain;
`

const Status = styled.Text`
  color: ${colors.gray[0]};
`

const InfoBlock = styled.View`
  margin: 10px;
  margin-bottom: 20px;
  max-width: 130px;
`

interface Props {
  character: Character
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <Card>
      <Image source={{ uri: character.image }} />
      <InfoBlock>
        <Status>{character.status}</Status>
        <Name>{character.name}</Name>
      </InfoBlock>
    </Card>
  )
}
