import { Modal, ScrollView } from 'native-base';
import React, { FC } from 'react';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalHistrix: FC<props> = ({
  children,
  isOpen,
  onClose,
}): JSX.Element => {
  return (
    <Modal size={'full'} isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Prueba</Modal.Header>
        <Modal.Body>
          <ScrollView>{children}</ScrollView>
        </Modal.Body>
        <Modal.Footer>prueba2</Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
