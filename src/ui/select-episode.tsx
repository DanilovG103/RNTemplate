import React from 'react'
import styled from 'styled-components/native'

import { useEpisodesFilter } from 'src/context/episodes-filter'
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

export const SelectEpisode = () => {
  const { setEpisode } = useEpisodesFilter()

  return (
    <Wrapper>
      <SelectTitle>Episodes from ...</SelectTitle>
      <SelectValueBlock onPress={() => setEpisode('s01')}>
        <SelectValue>Season 1</SelectValue>
      </SelectValueBlock>
      <SelectValueBlock onPress={() => setEpisode('s02')}>
        <SelectValue>Season 2</SelectValue>
      </SelectValueBlock>
      <SelectValueBlock onPress={() => setEpisode('s03')}>
        <SelectValue>Season 3</SelectValue>
      </SelectValueBlock>
      <SelectValueBlock onPress={() => setEpisode('s04')}>
        <SelectValue>Season 4</SelectValue>
      </SelectValueBlock>
    </Wrapper>
  )
}
