import React from 'react'

import { useFilterUpdate } from 'src/context/FilterContext'

import { InputContainer } from './input-container'

interface Props {
  visible: boolean
  setVisible: (value: boolean) => void
  filterType: string
}

export const LocationFilter = ({ visible, setVisible, filterType }: Props) => {
  const { setLocationType, setLocationDimension } = useFilterUpdate()
  const title = filterType === 'type' ? 'Type' : 'Dimension'

  const setFilter = (value: string) => {
    if (filterType === 'type') {
      setLocationType(value)
    } else {
      setLocationDimension(value)
    }
  }

  return (
    <InputContainer
      visible={visible}
      setVisible={setVisible}
      title={title}
      onChangeText={setFilter}
    />
  )
}
