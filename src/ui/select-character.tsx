import React from 'react'
import { has } from 'lodash'
import styled from 'styled-components/native'

import { useCharactersFilter } from 'src/context/character-filter'
import { colors } from 'src/theme/colors'

const Wrapper = styled.View`
  margin-bottom: 20px;
`

const SelectTitle = styled.Text`
  font-size: 15px;
  color: ${colors.gray[6]};
  margin-left: 20px;
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

const Row = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 30px;
  margin: 5px 0;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: ${colors.gray[6]};
  width: 100%;
`

const SelectValue = styled.Text`
  color: ${colors.black};
  font-size: 17px;
  font-family: Montserrat;
`

export const SelectCharacter = () => {
  const {
    isAlive,
    isDead,
    isUnknown,
    isFemale,
    isMale,
    isGenderless,
    isGenderUnknown,
    setStatus,
    setGender,
  } = useCharactersFilter()

  const setAlive = () => {
    if (isAlive) {
      setStatus('')
    } else {
      setStatus('alive')
    }
  }

  const setDead = () => {
    if (isDead) {
      setStatus('')
    } else {
      setStatus('dead')
    }
  }

  const setUnknown = () => {
    if (isUnknown) {
      setStatus('')
    } else {
      setStatus('unknown')
    }
  }

  const setFemale = () => {
    if (isFemale) {
      setGender('')
    } else {
      setGender('female')
    }
  }

  const setMale = () => {
    if (isMale) {
      setGender('')
    } else {
      setGender('male')
    }
  }

  const setGenderless = () => {
    if (isGenderless) {
      setGender('')
    } else {
      setGender('genderless')
    }
  }

  const setGenderUnknown = () => {
    if (isGenderUnknown) {
      setGender('')
    } else {
      setGender('unknown')
    }
  }

  return (
    <Wrapper>
      <SelectTitle>Status</SelectTitle>
      <Row onPress={setAlive}>
        <Circle isSelected={isAlive} />
        <SelectValue>Alive</SelectValue>
      </Row>
      <Row onPress={setDead}>
        <Circle isSelected={isDead} />
        <SelectValue>Dead</SelectValue>
      </Row>
      <Row onPress={setUnknown}>
        <Circle isSelected={isUnknown} />
        <SelectValue>Unknown</SelectValue>
      </Row>
      <SelectTitle>Gender</SelectTitle>
      <Row onPress={setFemale}>
        <Circle isSelected={isFemale} />
        <SelectValue>Female</SelectValue>
      </Row>
      <Row onPress={setMale}>
        <Circle isSelected={isMale} />
        <SelectValue>Male</SelectValue>
      </Row>
      <Row onPress={setGenderless}>
        <Circle isSelected={isGenderless} />
        <SelectValue>Genderless</SelectValue>
      </Row>
      <Row onPress={setGenderUnknown}>
        <Circle isSelected={isGenderUnknown} />
        <SelectValue>Unknown</SelectValue>
      </Row>
    </Wrapper>
  )
}
