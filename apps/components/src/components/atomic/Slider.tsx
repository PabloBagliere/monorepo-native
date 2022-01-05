import { ISliderProps, Slider } from 'native-base';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

import { formBasic, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';

import { FormMessageError } from './FormMessageError';
interface props extends ISliderProps, formBasic {
  register?: T;
}

export const AtomicSlider: FC<props> = ({
  register,
  name,
  control,
  rules,
  styleLayout,
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
      <FormMessageError name={name} />
    </InputsFormLayout>
  );
};
