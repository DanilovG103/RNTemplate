import React from 'react'

import { useFilterUpdate } from 'src/context/FilterContext'

import { InputContainer } from './input-container'

interface Props {
  visible: boolean
  setVisible: (value: boolean) => void
  type: string
}

export const InputName = ({ visible, setVisible, type }: Props) => {
  const { setEpisodeName, setLocationName } = useFilterUpdate()

  const setName = (value: string) => {
    if (type === 'episode') {
      setEpisodeName(value)
    } else if (type === 'location') {
      setLocationName(value)
    }
  }

  return (
    <InputContainer
      visible={visible}
      setVisible={setVisible}
      title="Name"
      onChangeText={setName}
    />
  )
}
