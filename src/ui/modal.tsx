import React, { FC } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import Modal from 'react-native-modal'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

interface IModalMenu {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

const StyledModal = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
  height: 100px;
`

const Container = styled.View`
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${colors.white};
`

export const ModalMenu: FC<IModalMenu> = ({
  showModal,
  setShowModal,
  children,
}) => {
  const closeModal = () => setShowModal(false)

  return (
    <StyledModal
      isVisible={showModal}
      onSwipeComplete={closeModal}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      swipeDirection={['down']}
      useNativeDriverForBackdrop
      statusBarTranslucent
      backdropOpacity={0.1}
      useNativeDriver
      hideModalContentWhileAnimating>
      <KeyboardAvoidingView behavior="position" enabled>
        <Container>{children}</Container>
      </KeyboardAvoidingView>
    </StyledModal>
  )
}
