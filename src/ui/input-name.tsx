import React from 'react'

import { useCharactersFilter } from 'src/context/character-filter'
import { useEpisodesFilter } from 'src/context/episodes-filter'
import { useLocationsFilter } from 'src/context/location-filter'
import { InputContainer } from 'src/ui/input-container'

interface Props {
  visible: boolean
  setVisible: (value: boolean) => void
  type?: string
}

export const InputName = ({ visible, setVisible, type }: Props) => {
  const { setEpisodeName } = useEpisodesFilter()
  const { setName } = useLocationsFilter()
  const { setCharacterName } = useCharactersFilter()

  const setSearchValue = (value: string) => {
    if (type === 'episode') {
      setEpisodeName(value)
    } else if (type === 'location') {
      setName(value)
    } else {
      setCharacterName(value)
    }
  }

  return (
    <InputContainer
      visible={visible}
      setVisible={setVisible}
      title="Name"
      onChangeText={setSearchValue}
    />
  )
}
