import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

const initialState = {
  characterName: '',
  gender: '',
  species: '',
  status: '',
  isAlive: false,
  isDead: false,
  isUnknown: false,
  isFemale: false,
  isMale: false,
  isGenderless: false,
  isGenderUnknown: false,
  filtersSelected: false,
}

const Filter = createContext(initialState)
export const useCharactersFilter = () => useContext(Filter)

interface Props {
  children: React.ReactNode
}

export const CharactersFilterProvider = ({ children }: Props) => {
  const [characterName, setCharacterName] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [status, setStatus] = useState('')
  const isAlive = status === 'alive'
  const isDead = status === 'dead'
  const isUnknown = status === 'unknown'
  const isFemale = gender === 'female'
  const isMale = gender === 'male'
  const isGenderless = gender === 'genderless'
  const isGenderUnknown = gender === 'unknown'

  const filtersSelected = !!characterName || !!gender || !!species || !!status

  const clearFilter = useCallback(() => {
    setCharacterName('')
    setGender('')
    setSpecies('')
    setStatus('')
  }, [setCharacterName, setGender, setSpecies, setStatus])

  const value = useMemo(
    () => ({
      characterName,
      gender,
      species,
      status,
      isAlive,
      isDead,
      isUnknown,
      isFemale,
      isMale,
      isGenderless,
      isGenderUnknown,
      filtersSelected,
      setCharacterName,
      setSpecies,
      setStatus,
      setGender,
      clearFilter,
    }),
    [
      characterName,
      gender,
      species,
      status,
      isAlive,
      isDead,
      isUnknown,
      isFemale,
      isMale,
      isGenderless,
      isGenderUnknown,
      filtersSelected,
      setCharacterName,
      setSpecies,
      setStatus,
      setGender,
      clearFilter,
    ],
  )

  return <Filter.Provider value={value}>{children}</Filter.Provider>
}
