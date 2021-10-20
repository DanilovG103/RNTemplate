import React from 'react'

import { useFilterUpdate } from 'src/context/FilterContext'

import { InputContainer } from './input-container'

interface Props {
  visible: boolean
  setVisible: (value: boolean) => void
}

export const EpisodeFilter = ({ visible, setVisible }: Props) => {
  const { setEpisode } = useFilterUpdate()

  return (
    <InputContainer
      visible={visible}
      setVisible={setVisible}
      title="Episode"
      onChangeText={(value) => setEpisode(value)}
    />
  )
}
