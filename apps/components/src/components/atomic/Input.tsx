import { IInputProps, Input } from 'native-base';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';
interface props extends IInputProps, formBasic {}

export const AtomicInput: FC<props> = ({
  register,
  name,
  control,
  rules,
  styleLayout,
  message,
  styleError,
  styleLabel,
  styleMessage,
  label,
  ...props
}): JSX.Element => {
  return !control ? (
    <Input {...register(name)} {...props} />
  ) : (
    <InputsFormLayout {...styleLayout}>
      {label ? <FormLabel {...styleLabel}>{label}</FormLabel> : null}
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
      {message ? (
        <FormMessageHelper {...styleMessage}>{message}</FormMessageHelper>
      ) : null}
      <FormMessageError {...styleError} name={name} />
    </InputsFormLayout>
  );
};
