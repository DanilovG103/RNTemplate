import React, { useState } from 'react'

import { useEpisodesFilter } from 'src/context/episodes-filter'
import { FilterBlock } from 'src/ui/filter-block'
import { FilterContainer } from 'src/ui/filter-container'
import { InputName } from 'src/ui/input-name'
import { ModalMenu } from 'src/ui/modal'
import { SelectEpisode } from 'src/ui/select-episode'

export const FilterEpisode = () => {
  const [inputVisible, setInputVisible] = useState(false)
  const [episodeVisible, setEpisodeVisible] = useState(false)

  const { episodeName, episode, filtersSelected, clearFilter } =
    useEpisodesFilter()

  return (
    <FilterContainer onPress={clearFilter} filtersSelected={filtersSelected}>
      <FilterBlock
        onPress={() => setInputVisible(true)}
        title="Name"
        description="Give a name"
        isSelected={!!episodeName}
      />
      <FilterBlock
        onPress={() => setEpisodeVisible(true)}
        title="Episode"
        description="Select one"
        isSelected={!!episode}
      />
      <InputName
        visible={inputVisible}
        setVisible={setInputVisible}
        type="episode"
      />
      <ModalMenu showModal={episodeVisible} setShowModal={setEpisodeVisible}>
        <SelectEpisode />
      </ModalMenu>
    </FilterContainer>
  )
}
