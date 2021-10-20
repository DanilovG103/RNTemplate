import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Arrow } from 'assets/images/icons/Arrow'
import styled from 'styled-components/native'

import { useFilter, useFilterUpdate } from 'src/context/FilterContext'
import { colors } from 'src/theme/colors'

import { InputName } from './input-name'
import { LocationFilter } from './location-filter'
import { ModalMenu } from './modal'

const Wrapper = styled.TouchableOpacity`
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  margin: 15px;
`

const HeaderTitle = styled.Text`
  color: ${colors.indigo};
  font-size: 17px;
  font-family: Montserrat-SemiBold;
`

const ModalTitle = styled.Text`
  font-size: 15px;
  font-family: Montserrat-Bold;
`

const ApplyBtn = styled.TouchableOpacity`
  background-color: ${colors.indigo};
  padding: 5px 10px;
  border-radius: 14px;
`

const Apply = styled(HeaderTitle)`
  color: ${colors.white};
  font-size: 13px;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
`

const FilterBlock = styled.TouchableOpacity`
  flex-direction: row;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colors.gray[6]};
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
const FilterText = styled(HeaderTitle)`
  color: ${colors.black};
`
const FilterDescription = styled(ModalTitle)`
  font-family: Montserrat;
  color: ${colors.gray[0]};
`

const Circle = styled.View<{ isSelected: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  border: 1px solid ${colors.black};
  margin-right: 15px;
  background-color: ${(props) =>
    props.isSelected ? colors.indigo : colors.white};
`

const FilterSelected = styled.View`
  width: 12px;
  height: 12px;
  background: ${colors.indigo};
  border-radius: 6px;
  margin-right: 5px;
`

const FilterBlockStart = styled.View`
  flex-direction: row;
  align-items: center;
`

export const FilterLocations = () => {
  const [visible, setVisible] = useState(false)
  const [inputVisible, setInputVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [dimensionVisible, setDimensionVisible] = useState(false)

  const { locationName, locationType, locationDimension } = useFilter()
  const { clearLocationFilter } = useFilterUpdate()
  const filtersSelected =
    !!locationName.length || !!locationType.length || !!locationDimension.length

  return (
    <SafeAreaView>
      <Wrapper onPress={() => setVisible(true)}>
        {filtersSelected && <FilterSelected />}
        <HeaderTitle>Filter</HeaderTitle>
        <ModalMenu showModal={visible} setShowModal={setVisible}>
          <Row>
            <TouchableOpacity onPress={clearLocationFilter}>
              <HeaderTitle>Clear</HeaderTitle>
            </TouchableOpacity>
            <ModalTitle>Filter</ModalTitle>
            <ApplyBtn>
              <Apply>APPLY</Apply>
            </ApplyBtn>
          </Row>
          <FilterBlock onPress={() => setInputVisible(true)}>
            <FilterBlockStart>
              <Circle isSelected={!!locationName} />
              <View>
                <FilterText>Name</FilterText>
                <FilterDescription>Give a name</FilterDescription>
              </View>
            </FilterBlockStart>
            <Arrow />
          </FilterBlock>
          <FilterBlock onPress={() => setTypeVisible(true)}>
            <FilterBlockStart>
              <Circle isSelected={!!locationType} />
              <View>
                <FilterText>Type</FilterText>
                <FilterDescription>Select one</FilterDescription>
              </View>
            </FilterBlockStart>
            <Arrow />
          </FilterBlock>
          <FilterBlock onPress={() => setDimensionVisible(true)}>
            <FilterBlockStart>
              <Circle isSelected={!!locationDimension} />
              <View>
                <FilterText>Dimension</FilterText>
                <FilterDescription>Select one</FilterDescription>
              </View>
            </FilterBlockStart>
            <Arrow />
          </FilterBlock>
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
        </ModalMenu>
      </Wrapper>
    </SafeAreaView>
  )
}
