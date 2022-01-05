import { IInputProps, Input } from 'native-base';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormMessageError } from './FormMessageError';
interface props extends IInputProps, formBasic {}

export const AtomicInput: FC<props> = ({
  register,
  name,
  control,
  rules,
  styleLayout,
  ...props
}): JSX.Element => {
  return !control ? (
    <Input {...register(name)} {...props} />
  ) : (
    <InputsFormLayout {...styleLayout}>
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
      <FormMessageError name={name} />
    </InputsFormLayout>
  );
};
