import React from 'react'
import { View } from 'react-native'
import { Arrow } from 'assets/images/icons/Arrow'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colors.gray[6]};
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const FilterText = styled.Text`
  color: ${colors.black};
  font-size: 17px;
  font-family: Montserrat-SemiBold;
`

const FilterDescription = styled.Text`
  font-family: Montserrat;
  font-size: 15px;
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

const FilterBlockStart = styled.View`
  flex-direction: row;
  align-items: center;
`

interface Props {
  onPress: () => void
  title: string
  description: string
  isSelected: boolean
}

export const FilterBlock = ({
  onPress,
  title,
  description,
  isSelected,
}: Props) => {
  return (
    <Wrapper onPress={onPress}>
      <FilterBlockStart>
        <Circle isSelected={isSelected} />
        <View>
          <FilterText>{title}</FilterText>
          <FilterDescription>{description}</FilterDescription>
        </View>
      </FilterBlockStart>
      <Arrow />
    </Wrapper>
  )
}
