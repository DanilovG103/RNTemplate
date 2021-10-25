import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

const initialState = {
  episodeName: '',
  episode: '',
  filtersSelected: false,
}

const Filter = createContext(initialState)

export const useEpisodesFilter = () => useContext(Filter)

interface Props {
  children: React.ReactNode
}

export const EpisodesFilterProvider = ({ children }: Props) => {
  const [episodeName, setEpisodeName] = useState('')
  const [episode, setEpisode] = useState('')

  const filtersSelected = !!episodeName.length || !!episode.length

  const clearFilter = useCallback(() => {
    setEpisodeName('')
    setEpisode('')
  }, [setEpisode, setEpisodeName])

  const value = useMemo(
    () => ({
      episodeName,
      episode,
      filtersSelected,
      clearFilter,
      setEpisode,
      setEpisodeName,
    }),
    [
      episodeName,
      episode,
      filtersSelected,
      clearFilter,
      setEpisode,
      setEpisodeName,
    ],
  )

  return <Filter.Provider value={value}>{children}</Filter.Provider>
}
