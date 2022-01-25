import { ISwitchProps, Switch } from 'native-base';
import React, { FC, useContext } from 'react';
import { Controller } from 'react-hook-form';

import Context from '../../context/ContextForm';
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
  const { control, register } = useContext(Context);
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
