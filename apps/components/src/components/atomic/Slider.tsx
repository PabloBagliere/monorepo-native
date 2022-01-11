import { ISliderProps, Slider } from 'native-base';
import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { formBasic, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';
interface props extends ISliderProps, formBasic {}

export const AtomicSlider: FC<props> = ({
  name,
  rules,
  styleLayout,
  styleError,
  styleMessage,
  styleLabel,
  label,
  message,
  ...props
}): JSX.Element => {
  const { control, register } = useFormContext();
  return !control ? (
    <Slider {...(register(name) as T)} {...props}>
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
    </Slider>
  ) : (
    <InputsFormLayout {...styleLayout}>
      {label ? <FormLabel {...styleLabel}>{label}</FormLabel> : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Slider
            {...(register(name) as T)}
            {...props}
            onChange={(val) => field.onChange(val)}
            defaultValue={field.value}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        )}
      />
      {message ? (
        <FormMessageHelper {...styleMessage}>{message}</FormMessageHelper>
      ) : null}
      <FormMessageError {...styleError} name={name} />
    </InputsFormLayout>
  );
};
