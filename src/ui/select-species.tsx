import React from 'react'
import styled from 'styled-components/native'

import { useCharactersFilter } from 'src/context/character-filter'
import { colors } from 'src/theme/colors'

const Wrapper = styled.View`
  margin: 10px 0 20px;
  align-items: center;
`

const SelectTitle = styled.Text`
  font-size: 17px;
  color: ${colors.dark};
  font-family: Montserrat-SemiBold;
`

const SelectValue = styled.Text`
  color: ${colors.black};
  font-size: 17px;
  font-family: Montserrat;
`

const SelectValueBlock = styled.TouchableOpacity`
  margin: 15px 0;
`

export const SelectSpecies = () => {
  const { setSpecies } = useCharactersFilter()

  return (
    <Wrapper>
      <SelectTitle>Species</SelectTitle>
      <SelectValueBlock onPress={() => setSpecies('human')}>
        <SelectValue>Human</SelectValue>
      </SelectValueBlock>
      <SelectValueBlock onPress={() => setSpecies('humanoid')}>
        <SelectValue>Humanoid</SelectValue>
      </SelectValueBlock>
      <SelectValueBlock onPress={() => setSpecies('alien')}>
        <SelectValue>Alien</SelectValue>
      </SelectValueBlock>
      <SelectValueBlock onPress={() => setSpecies('myth')}>
        <SelectValue>Mythological Creature</SelectValue>
      </SelectValueBlock>
      <SelectValueBlock onPress={() => setSpecies('unknown')}>
        <SelectValue>Unknown</SelectValue>
      </SelectValueBlock>
    </Wrapper>
  )
}
