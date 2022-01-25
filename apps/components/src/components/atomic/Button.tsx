import { Button, IButtonProps } from 'native-base';
import React, { FC, useContext } from 'react';

import Context from '../../context/ContextForm';

type props = IButtonProps;

export const AtomicButton: FC<props> = ({
  children,
  onPress,
  ...props
}): JSX.Element => {
  const { handleSubmit } = useContext(Context);
  if (handleSubmit !== null) {
    onPress = handleSubmit(onPress);
  }
  return (
    <Button onPress={onPress} {...props}>
      {children}
    </Button>
  );
};
