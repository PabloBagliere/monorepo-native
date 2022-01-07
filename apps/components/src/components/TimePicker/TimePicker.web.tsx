// TimePicker.web.ts
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';
import { FormLabel } from '../atomic/FormLabel';
import { FormMessageError } from '../atomic/FormMessageError';
import { FormMessageHelper } from '../atomic/FormMessageHelper';

type props = formBasic;

export const AtomicTimepicker: FC<props> = ({
  control,
  label,
  message,
  name,
  register,
  rules,
  styleError,
  styleLabel,
  styleLayout,
  styleMessage,
}): JSX.Element => {
  return !control ? (
    <input {...register(name)} type="time" />
  ) : (
    <InputsFormLayout {...styleLayout}>
      {label ? <FormLabel {...styleLabel}>{label}</FormLabel> : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            {...register(name)}
            type="time"
            value={field.value}
            onChange={(val) => field.onChange(val)}
            ref={field.ref}
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
