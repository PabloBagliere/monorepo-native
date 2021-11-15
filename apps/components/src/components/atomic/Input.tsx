import { IInputProps, Input } from 'native-base';
import { FC } from 'react';

type props = IInputProps;

export const AtomicInput: FC<props> = ({ ...props }): JSX.Element => {
  return <Input {...props} />;
};
