import { ISwitchProps, Switch } from 'native-base';
import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { formBasic, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';

interface props extends ISwitchProps, formBasic {}

export const AtomicSwitch: FC<props> = ({
  name,
  rules,
  styleLayout,
  message,
  styleError,
  styleLabel,
  styleMessage,
  label,
  ...props
}): JSX.Element => {
  const { control, register } = useFormContext();
  return !control ? (
    <Switch {...(register(name) as T)} {...props} />
  ) : (
    <InputsFormLayout {...styleLayout}>
      {label ? <FormLabel {...styleLabel}>{label}</FormLabel> : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Switch
            {...(register(name) as T)}
            onToggle={() => field.onChange(!field.value)}
            isChecked={field.value}
            {...props}
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
