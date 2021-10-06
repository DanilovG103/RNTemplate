import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Background = styled.ScrollView`
  background: ${colors.gray[4]};
  flex: 1;
`

const Block = styled.View`
  background: ${colors.gray[3]};
  align-items: center;
  padding: 30px;
  width: 100%;
`

const FirstAdditionalInfo = styled.Text`
  font-size: 11px;
  color: ${colors.gray[0]};
  font-family: Montserrat;
`

const Title = styled.Text`
  color: ${colors.dark};
  font-size: 28px;
  font-family: Montserrat-Bold;
  text-align: center;
`

const SecondAdditionalInfo = styled.Text`
  color: ${colors.gray[5]};
  font-size: 13px;
  font-family: Montserrat-SemiBold;
`

const Image = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  margin-bottom: 8px;
  resize-mode: contain;
`

interface Props {
  imageUri?: string
  firstInfo: string
  secondInfo: string
  title: string
  children?: ReactNode
}

export const DetailedContainer = ({
  imageUri,
  firstInfo,
  secondInfo,
  title,
  children,
}: Props) => {
  return (
    <Background>
      <Block>
        {imageUri ? <Image source={{ uri: imageUri }} /> : null}
        <FirstAdditionalInfo>{firstInfo}</FirstAdditionalInfo>
        <Title>{title}</Title>
        <SecondAdditionalInfo>{secondInfo}</SecondAdditionalInfo>
      </Block>
      {children}
    </Background>
  )
}
