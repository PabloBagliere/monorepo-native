import { ISwitchProps, Switch } from 'native-base';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormMessageError } from './FormMessageError';

interface props extends ISwitchProps, formBasic {
  register?: T;
}

export const AtomicSwitch: FC<props> = ({
  register,
  name,
  control,
  rules,
  styleLayout,
  ...props
}): JSX.Element => {
  return !control ? (
    <Switch {...register(name)} {...props} />
  ) : (
    <InputsFormLayout {...styleLayout}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Switch
            {...register(name)}
            onToggle={() => field.onChange(!field.value)}
            isChecked={field.value}
            {...props}
          />
        )}
      />
      <FormMessageError name={name} />
    </InputsFormLayout>
  );
};
