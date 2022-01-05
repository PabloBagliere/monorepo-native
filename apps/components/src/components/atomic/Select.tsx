import {
  ISelectProps,
  Select,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'native-base';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic, Options, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';

interface props extends ISelectProps, formBasic {
  options: Array<Options>;
  register?: T;
}

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
  return control ? (
    <Select
      {...register(name)}
      dropdownOpenIcon={<ChevronUpIcon size="4" />}
      dropdownCloseIcon={<ChevronDownIcon size="4" />}
      {...props}
    >
      {options.map((value) => {
        return (
          <Select.Item key={value.id} label={value.label} value={value.value} />
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
            onValueChange={(val) => field.onChange(val)}
          >
            {options.map((value) => {
              return (
                <Select.Item
                  key={value.id}
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
