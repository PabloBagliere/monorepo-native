import { IRadioGroupProps, Radio } from 'native-base';
import React, { FC, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { formBasic, Options, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';

interface props extends IRadioGroupProps, formBasic {
  options: Options;
  name: string;
}

const setOptions = (
  options: Options,
): Array<{ value: string; label: string }> => {
  const OptionsSet = [];
  const ArrayObject = Object.entries(options);
  ArrayObject.forEach((e) => {
    OptionsSet.push({
      value: e[0],
      label: typeof e[1] === 'object' ? e[1][Object.keys(e[1])[0]] : e[1],
    });
  });
  return OptionsSet;
};

export const AtomicRadio: FC<props> = ({
  options,
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
  const optionsMemo = useMemo(() => setOptions(options), [options]);
  const { control, register } = useFormContext();
  return !control ? (
    <Radio.Group {...(register(name) as T)} {...props}>
      {optionsMemo.map((value, index) => {
        return (
          <Radio value={value.value} key={index}>
            {value.label}
          </Radio>
        );
      })}
    </Radio.Group>
  ) : (
    <InputsFormLayout {...styleLayout}>
      {label ? <FormLabel {...styleLabel}>{label}</FormLabel> : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Radio.Group
            {...(register(name) as T)}
            {...props}
            onChange={(val) => field.onChange(val)}
          >
            {optionsMemo.map((value, index) => {
              return (
                <Radio value={value.value} key={index}>
                  {value.label}
                </Radio>
              );
            })}
          </Radio.Group>
        )}
      />
      {message ? (
        <FormMessageHelper {...styleMessage}>{message}</FormMessageHelper>
      ) : null}
      <FormMessageError {...styleError} name={name} />
    </InputsFormLayout>
  );
};
