import { FormControl, IFormControlLabelProps } from 'native-base';
import React, { FC } from 'react';

type props = IFormControlLabelProps;

export const FormLabel: FC<props> = ({ children, ...props }): JSX.Element => (
  <FormControl.Label {...props}>{children}</FormControl.Label>
);
