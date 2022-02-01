// TimePicker.web.ts
import React, { FC, useContext } from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';

import Context from '../../../context/ContextForm';
import { formBasic } from '../../../Interfaces';
import { InputsFormLayout } from '../../../layouts';
import { FormLabel } from '../FormLabel';
import { FormMessageError } from '../FormMessageError';
import { FormMessageHelper } from '../FormMessageHelper';

type props = formBasic;

const Input = styled.input`
  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

export const AtomicTimepicker: FC<props> = ({
  label,
  message,
  name,
  rules,
  styleError,
  styleLabel,
  styleLayout,
  isDisabled,
  styleMessage,
}): JSX.Element => {
  const { control, register } = useContext(Context);
  return !control ? (
    <Input {...register(name)} disabled={isDisabled} type="time" />
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
            type="time"
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