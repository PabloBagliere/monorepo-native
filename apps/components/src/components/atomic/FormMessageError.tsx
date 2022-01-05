import { FormControl, IFormControlErrorMessageProps } from 'native-base';
import React, { FC, useContext } from 'react';

import { ContextForm } from '../../context';

interface props extends IFormControlErrorMessageProps {
  name: string;
}

export const FormMessageError: FC<props> = ({
  name,
  ...props
}): JSX.Element => {
  const { errorComponent } = useContext(ContextForm);
  return (
    <FormControl.ErrorMessage {...props}>
      {errorComponent?.[name]?.message}
    </FormControl.ErrorMessage>
  );
};
