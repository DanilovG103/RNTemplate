import React, { useState } from 'react'

import { useLocationsFilter } from 'src/context/location-filter'
import { FilterBlock } from 'src/ui/filter-block'
import { FilterContainer } from 'src/ui/filter-container'
import { InputName } from 'src/ui/input-name'
import { LocationFilter } from 'src/ui/location-filter'

export const FilterLocations = () => {
  const [inputVisible, setInputVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [dimensionVisible, setDimensionVisible] = useState(false)

  const { name, type, dimension, filtersSelected, clearFilter } =
    useLocationsFilter()

  return (
    <FilterContainer onPress={clearFilter} filtersSelected={filtersSelected}>
      <FilterBlock
        onPress={() => setInputVisible(true)}
        title="Name"
        description="Give a name"
        isSelected={!!name}
      />
      <FilterBlock
        onPress={() => setTypeVisible(true)}
        title="Type"
        description="Give a type"
        isSelected={!!type}
      />
      <FilterBlock
        onPress={() => setDimensionVisible(true)}
        title="Dimension"
        description="Give a dimension"
        isSelected={!!dimension}
      />
      <InputName
        visible={inputVisible}
        setVisible={setInputVisible}
        type="location"
      />
      <LocationFilter
        visible={typeVisible}
        setVisible={setTypeVisible}
        filterType="type"
      />
      <LocationFilter
        visible={dimensionVisible}
        setVisible={setDimensionVisible}
        filterType="dimension"
      />
    </FilterContainer>
  )
}
