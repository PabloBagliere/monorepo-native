import { Checkbox, ICheckboxGroupProps } from 'native-base';
import React, { FC, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { formBasic, Options, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';

interface props extends ICheckboxGroupProps, formBasic {
  options: Options;
  multiple?: (value: T) => void;
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

export const AtomicCheckbox: FC<props> = ({
  options,
  onChange,
  multiple,
  rules,
  name,
  styleLayout,
  styleError,
  styleMessage,
  styleLabel,
  label,
  message,
  ...props
}): JSX.Element => {
  const optionsMemo = useMemo(() => setOptions(options), [options]);
  const { control, register } = useFormContext();
  return !control ? (
    <Checkbox.Group
      {...register(name)}
      onChange={(value) => {
        if (multiple) multiple(value);
        onChange(value);
      }}
      {...props}
    >
      {optionsMemo.map((value, index) => {
        return (
          <Checkbox value={value.value} key={index}>
            {value.label}
          </Checkbox>
        );
      })}
    </Checkbox.Group>
  ) : (
    <InputsFormLayout {...styleLayout}>
      {label ? <FormLabel {...styleLabel}>{label}</FormLabel> : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Checkbox.Group
            {...register(name)}
            onChange={(value) => {
              if (multiple) multiple(value);
              field.onChange(value);
            }}
            {...props}
          >
            {optionsMemo.map((value, index) => {
              return (
                <Checkbox value={value.value} key={index}>
                  {value.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        )}
      />
      {message ? (
        <FormMessageHelper {...styleMessage}>{message}</FormMessageHelper>
      ) : null}
      <FormMessageError {...styleError} name={name} />
    </InputsFormLayout>
  );
};
