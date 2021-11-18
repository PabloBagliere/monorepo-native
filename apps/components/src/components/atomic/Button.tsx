import { Button, IButtonProps } from 'native-base';
import React, { FC } from 'react';

import { T } from '../../Interfaces';

export interface props extends IButtonProps {
  onSubmit: (value: T) => void;
}

export const AtomicButton: FC<props> = ({
  children,
  onSubmit,
  ...props
}): JSX.Element => {
  return (
    <Button {...props} onPress={onSubmit}>
      {children}
    </Button>
  );
};
