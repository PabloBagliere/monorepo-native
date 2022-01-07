import {
  ISelectProps,
  Select,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'native-base';
import React, { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic, Options, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';

interface props extends ISelectProps, formBasic {
  options: Options;
  register?: T;
}

const setOptions = (
  options: Options,
): Array<{ value: string; label: string }> => {
  const p = [];
  const a = Object.entries(options);
  a.forEach((e) => {
    p.push({
      value: e[0],
      label: typeof e[1] === 'object' ? e[1][Object.keys(e[1])[0]] : e[1],
    });
  });
  return p;
};

export const AtomicSelect: FC<props> = ({
  options,
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
  const optionsMemo = useMemo(() => setOptions(options), [options]);
  return control ? (
    <Select
      {...register(name)}
      dropdownOpenIcon={<ChevronUpIcon size="4" />}
      dropdownCloseIcon={<ChevronDownIcon size="4" />}
      {...props}
    >
      {optionsMemo.map((value) => {
        return (
          <Select.Item
            key={value.value}
            label={value.label}
            value={value.value}
          />
        );
      })}
    </Select>
  ) : (
    <InputsFormLayout {...styleLayout}>
      {label ? <FormLabel {...styleLabel}>{label}</FormLabel> : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            {...register(name)}
            dropdownOpenIcon={<ChevronUpIcon size="4" />}
            dropdownCloseIcon={<ChevronDownIcon size="4" />}
            {...props}
            selectedValue={field.value}
            onValueChange={(val) => field.onChange(parseInt(val))}
          >
            {optionsMemo.map((value) => {
              return (
                <Select.Item
                  key={value.value}
                  label={value.label}
                  value={value.value}
                />
              );
            })}
          </Select>
        )}
      />
      {message ? (
        <FormMessageHelper {...styleMessage}>{message}</FormMessageHelper>
      ) : null}
      <FormMessageError {...styleError} name={name} />
    </InputsFormLayout>
  );
};
