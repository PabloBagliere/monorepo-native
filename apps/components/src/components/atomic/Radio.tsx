import { IRadioGroupProps, IRadioProps, Radio } from 'native-base';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic, Options, T } from '../../Interfaces';

interface props extends IRadioGroupProps, formBasic {
  options: Array<Options>;
  register?: T;
  name: string;
}

export const AtomicRadio: FC<props> = ({
  options,
  register,
  name,
  control,
  rules,
  ...props
}): JSX.Element => {
  return !control ? (
    <Radio.Group {...register(name)} {...props}>
      {options.map((value) => {
        return (
          <Radio
            value={value.value}
            key={value.id}
            {...(value.props as IRadioProps)}
          >
            {value.label}
          </Radio>
        );
      })}
    </Radio.Group>
  ) : (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Radio.Group
          {...register(name)}
          {...props}
          onChange={(val) => field.onChange(val)}
        >
          {options.map((value) => {
            return (
              <Radio
                value={value.value}
                key={value.id}
                {...(value.props as IRadioProps)}
              >
                {value.label}
              </Radio>
            );
          })}
        </Radio.Group>
      )}
    />
  );
};
