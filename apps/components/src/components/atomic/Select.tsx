import {
  ISelectProps,
  Select,
  ChevronDownIcon,
  ChevronUpIcon,
  Pressable,
} from 'native-base';
import React, { FC, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { formBasic, Options, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';

interface props extends ISelectProps, formBasic {
  options: Options;
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

export const AtomicSelect: FC<props> = ({
  options,
  name,
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
  const { control, register } = useFormContext();
  return !control ? (
    <Select
      {...(register(name) as T)}
      dropdownOpenIcon={<ChevronUpIcon size="4" />}
      dropdownCloseIcon={<ChevronDownIcon size="4" />}
      _web={{
        cursor: props.isDisabled ? 'not-allowed' : 'pointer',
      }}
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
          <Pressable>
            <Select
              {...(register(field.name) as T)}
              dropdownOpenIcon={<ChevronUpIcon size="4" />}
              dropdownCloseIcon={<ChevronDownIcon size="4" />}
              {...props}
              selectedValue={String(field.value)}
              ref={field.ref}
              _web={{
                cursor: 'pointer',
              }}
              onValueChange={(val) => {
                field.onChange(parseInt(val));
              }}
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
          </Pressable>
        )}
      />
      {message ? (
        <FormMessageHelper {...styleMessage}>{message}</FormMessageHelper>
      ) : null}
      <FormMessageError {...styleError} name={name} />
    </InputsFormLayout>
  );
};
