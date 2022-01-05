import { TextArea } from 'native-base';
import { ITextAreaProps } from 'native-base/lib/typescript/components/primitives/TextArea';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormMessageError } from './FormMessageError';

interface props extends ITextAreaProps, formBasic {}

export const AtomicTextarea: FC<props> = ({
  register,
  name,
  control,
  rules,
  styleLayout,
  ...props
}): JSX.Element => {
  return !control ? (
    <TextArea {...register(name)} {...props} />
  ) : (
    <InputsFormLayout {...styleLayout}>
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
      <FormMessageError name={name} />
    </InputsFormLayout>
  );
};
