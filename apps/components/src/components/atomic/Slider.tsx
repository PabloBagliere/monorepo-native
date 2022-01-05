import { ISliderProps, Slider } from 'native-base';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormLabel } from './FormLabel';
import { FormMessageError } from './FormMessageError';
import { FormMessageHelper } from './FormMessageHelper';
interface props extends ISliderProps, formBasic {
  register?: T;
}

export const AtomicSlider: FC<props> = ({
  register,
  name,
  control,
  rules,
  styleLayout,
  styleError,
  styleMessage,
  styleLabel,
  label,
  message,
  ...props
}): JSX.Element => {
  return !control ? (
    <Slider {...register(name)} {...props}>
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
            {...register(name)}
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
