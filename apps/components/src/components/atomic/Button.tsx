import { Button, IButtonProps } from 'native-base';
import React, { FC } from 'react';

type props = IButtonProps;

export const AtomicButton: FC<props> = ({
  children,
  ...props
}): JSX.Element => {
  return <Button {...props}>{children}</Button>;
};
