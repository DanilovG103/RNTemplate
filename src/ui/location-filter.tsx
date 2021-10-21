import React from 'react'

import { useLocationsFilter } from 'src/context/location-filter'

import { InputContainer } from './input-container'

interface Props {
  visible: boolean
  setVisible: (value: boolean) => void
  filterType: string
}

export const LocationFilter = ({ visible, setVisible, filterType }: Props) => {
  const { setType, setDimension } = useLocationsFilter()
  const title = filterType === 'type' ? 'Type' : 'Dimension'

  const setFilter = (value: string) => {
    if (filterType === 'type') {
      setType(value)
    } else {
      setDimension(value)
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
