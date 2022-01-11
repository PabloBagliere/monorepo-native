import { FormControl, IFormControlErrorMessageProps } from 'native-base';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface props extends IFormControlErrorMessageProps {
  name: string;
}

export const FormMessageError: FC<props> = ({
  name,
  ...props
}): JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl.ErrorMessage {...props}>
      {errors?.[name]?.message}
    </FormControl.ErrorMessage>
  );
};
