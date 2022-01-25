import { FormControl, IFormControlErrorMessageProps } from 'native-base';
import React, { FC, useContext } from 'react';

import Context from '../../context/ContextForm';

interface props extends IFormControlErrorMessageProps {
  name: string;
}

export const FormMessageError: FC<props> = ({
  name,
  ...props
}): JSX.Element => {
  const {
    formState: { errors },
  } = useContext(Context);
  return (
    <FormControl.ErrorMessage {...props}>
      {errors?.[name]?.message}
    </FormControl.ErrorMessage>
  );
};
