import { IInputProps, Input } from 'native-base';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic } from '../../Interfaces';
interface props extends IInputProps, formBasic {}

export const AtomicInput: FC<props> = ({
  register,
  name,
  control,
  rules,
  ...props
}): JSX.Element => {
  return !control ? (
    <Input {...register(name)} {...props} />
  ) : (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Input
          {...register(name)}
          {...props}
          onChangeText={(val) => field.onChange(val)}
        />
      )}
    />
  );
};
