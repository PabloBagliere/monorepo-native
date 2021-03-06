// Datepicker.web.tsx
import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { formBasic } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';
import { FormLabel } from '../atomic/FormLabel';
import { FormMessageError } from '../atomic/FormMessageError';
import { FormMessageHelper } from '../atomic/FormMessageHelper';
type props = formBasic;

const Input = styled.input`
  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

export const AtomicDatapicker: FC<props> = ({
  label,
  message,
  name,
  rules,
  styleError,
  styleLabel,
  styleLayout,
  styleMessage,
  isDisabled,
}): JSX.Element => {
  const { control, register } = useFormContext();
  return !control ? (
    <Input {...register(name)} disabled={isDisabled} type="date" />
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
            type="date"
            disabled={isDisabled}
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
