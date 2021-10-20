import React, { createContext, useContext, useState } from 'react'

const initialState = {
  locationName: '',
  locationType: '',
  locationDimension: '',
  episodeName: '',
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
  const [locationName, setLocationName] = useState('')
  const [locationType, setLocationType] = useState('')
  const [locationDimension, setLocationDimension] = useState('')
  const [episodeName, setEpisodeName] = useState('')
  const [episode, setEpisode] = useState('')

  const clearEpisodeFilter = () => {
    setEpisodeName('')
    setEpisode('')
  }

  const clearLocationFilter = () => {
    setLocationName('')
    setLocationType('')
    setLocationDimension('')
  }

  return (
    <FilterContext.Provider
      value={{
        locationName,
        locationType,
        locationDimension,
        episodeName,
        episode,
      }}>
      <FilterUpdate.Provider
        value={{
          setLocationName,
          setLocationType,
          setLocationDimension,
          setEpisodeName,
          setEpisode,
          clearEpisodeFilter,
          clearLocationFilter,
        }}>
        {children}
      </FilterUpdate.Provider>
    </FilterContext.Provider>
  )
}
