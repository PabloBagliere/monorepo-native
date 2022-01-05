import { Checkbox, ICheckboxGroupProps, ICheckboxProps } from 'native-base';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic, Options, T } from '../../Interfaces';

interface props extends ICheckboxGroupProps, formBasic {
  options: Array<Options>;
  multiple?: (value: T) => void;
}

export const AtomicCheckbox: FC<props> = ({
  options,
  onChange,
  multiple,
  register,
  control,
  rules,
  name,
  ...props
}): JSX.Element => {
  return !control ? (
    <Checkbox.Group
      {...register(name)}
      onChange={(value) => {
        if (multiple) multiple(value);
        onChange(value);
      }}
      {...props}
    >
      {options.map((value) => {
        return (
          <Checkbox
            value={value.value}
            key={value.id}
            {...(value.props as ICheckboxProps)}
          >
            {value.label}
          </Checkbox>
        );
      })}
    </Checkbox.Group>
  ) : (
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
          {options.map((value) => {
            return (
              <Checkbox
                value={value.value}
                key={value.id}
                {...(value.props as ICheckboxProps)}
              >
                {value.label}
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      )}
    />
  );
};
