import React, { createContext, useContext, useState } from 'react'

const initialState = {
  name: '',
  episode: '',
}

const FilterContext = createContext(initialState)
const FilterUpdate = createContext({})

export const useFilter = () => useContext(FilterContext)
export const useFilterUpdate = () => useContext(FilterUpdate)

interface Props {
  children: React.ReactNode
}

export const FilterProvider = ({ children }: Props) => {
  const [name, setName] = useState('')
  const [episode, setEpisode] = useState('')

  const clearFilter = () => {
    setName('')
    setEpisode('')
  }

  return (
    <FilterContext.Provider value={{ name, episode }}>
      <FilterUpdate.Provider value={{ setName, setEpisode, clearFilter }}>
        {children}
      </FilterUpdate.Provider>
    </FilterContext.Provider>
  )
}
