import { ICheckboxProps, Checkbox } from 'native-base';
import { FC } from 'react';

type props = ICheckboxProps;

export const AtomicInput: FC<props> = ({ ...props }): JSX.Element => {
  return <Checkbox {...props} />;
};
