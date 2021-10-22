import React, { useState } from 'react'

import { useCharactersFilter } from 'src/context/character-filter'
import { FilterBlock } from 'src/ui/filter-block'
import { FilterContainer } from 'src/ui/filter-container'
import { InputName } from 'src/ui/input-name'
import { ModalMenu } from 'src/ui/modal'
import { SelectCharacter } from 'src/ui/select-character'
import { SelectSpecies } from 'src/ui/select-species'

export const FilterCharacters = () => {
  const [inputVisible, setInputVisible] = useState(false)
  const [speciesVisible, setSpeciesVisible] = useState(false)
  const { characterName, species, filtersSelected, clearFilter } =
    useCharactersFilter()

  return (
    <FilterContainer onPress={clearFilter} filtersSelected={filtersSelected}>
      <FilterBlock
        onPress={() => setInputVisible(true)}
        title="Name"
        description="Give a name"
        isSelected={!!characterName}
      />
      <FilterBlock
        onPress={() => setSpeciesVisible(true)}
        title="Species"
        description="Select one"
        isSelected={!!species}
      />
      <SelectCharacter />
      <InputName visible={inputVisible} setVisible={setInputVisible} />
      <ModalMenu showModal={speciesVisible} setShowModal={setSpeciesVisible}>
        <SelectSpecies />
      </ModalMenu>
    </FilterContainer>
  )
}
