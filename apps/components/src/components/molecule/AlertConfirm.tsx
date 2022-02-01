import React, { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import { AlertDialog, Button } from 'native-base';

import { T } from '../../Interfaces/anyT';

interface props {
  action: () => void;
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  reference: MutableRefObject<T>;
}

export const AlertConfirmHistrix: FC<props> = ({
  children,
  isOpen,
  action,
  close,
  reference,
}): JSX.Element => {
  return (
    <AlertDialog
      leastDestructiveRef={reference}
      isOpen={isOpen}
      onClose={() => close(false)}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Eliminar</AlertDialog.Header>
        <AlertDialog.Body>{children}</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={() => close(false)}
              ref={reference}
            >
              Cancel
            </Button>
            <Button colorScheme="danger" onPress={action}>
              Delete
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
