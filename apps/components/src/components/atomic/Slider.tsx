import { ISliderProps, Slider } from 'native-base';
import { FC } from 'react';

type props = ISliderProps;

export const AtomicSlider: FC<props> = ({ ...props }): JSX.Element => {
  return (
    <Slider {...props}>
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
    </Slider>
  );
};
