import { FormControl, IFormControlHelperTextProps } from 'native-base';
import React, { FC } from 'react';

type props = IFormControlHelperTextProps;

export const FormMessageHelper: FC<props> = ({
  children,
  ...props
}): JSX.Element => (
  <FormControl.HelperText {...props}>{children}</FormControl.HelperText>
);
