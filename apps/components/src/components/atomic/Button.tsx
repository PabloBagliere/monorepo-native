import { Button, IButtonProps } from 'native-base';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

type props = IButtonProps;

export const AtomicButton: FC<props> = ({
  children,
  onPress,
  ...props
}): JSX.Element => {
  const { handleSubmit } = useFormContext();
  if (handleSubmit !== null) {
    onPress = handleSubmit(onPress);
  }
  return (
    <Button onPress={onPress} {...props}>
      {children}
    </Button>
  );
};
