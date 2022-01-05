import { TextArea } from 'native-base';
import { ITextAreaProps } from 'native-base/lib/typescript/components/primitives/TextArea';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';

interface props extends ITextAreaProps, formBasic {}

export const AtomicTextarea: FC<props> = ({
  register,
  name,
  control,
  rules,
  styleLayout,
  styleError,
  styleLabel,
  styleMessage,
  label,
  message,
  ...props
}): JSX.Element => {
  return !control ? (
    <TextArea {...register(name)} {...props} />
  ) : (
    <InputsFormLayout {...styleLayout}>
      {label ? <FormLabel {...styleLabel}>{label}</FormLabel> : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <TextArea
            {...register(name)}
            onChangeText={(val) => field.onChange(val)}
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
