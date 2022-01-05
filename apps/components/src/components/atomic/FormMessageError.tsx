import { FormControl } from 'native-base';
import React, { FC, useContext } from 'react';

import { ContextForm } from '../../context';

interface props {
  name: string;
}

export const FormMessageError: FC<props> = ({ name }): JSX.Element => {
  console.log('hola');
  const { errorComponent } = useContext(ContextForm);
  return (
    <FormControl.ErrorMessage>
      {errorComponent?.[name]?.message}
    </FormControl.ErrorMessage>
  );
};
