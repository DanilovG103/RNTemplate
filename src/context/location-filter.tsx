import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

const initialState = {
  name: '',
  type: '',
  dimension: '',
  filtersSelected: false,
}

const Filter = createContext(initialState)
export const useLocationsFilter = () => useContext(Filter)

interface Props {
  children: React.ReactNode
}

export const LocationsFilterProvider = ({ children }: Props) => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [dimension, setDimension] = useState('')
  const filtersSelected = !!name.length || !!type.length || !!dimension.length

  const clearFilter = useCallback(() => {
    setName('')
    setType('')
    setDimension('')
  }, [setName, setType, setDimension])

  const value = useMemo(
    () => ({
      name,
      type,
      dimension,
      filtersSelected,
      clearFilter,
    }),
    [name, type, dimension, filtersSelected, clearFilter],
  )

  return <Filter.Provider value={value}>{children}</Filter.Provider>
}
