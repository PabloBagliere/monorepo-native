import { Options } from 'Interfaces';
import { IRadioGroupProps, IRadioProps, Radio } from 'native-base';
import { FC } from 'react';

interface props extends IRadioGroupProps {
  options: Array<Options>;
}

export const AtomicRadio: FC<props> = ({ options, ...props }): JSX.Element => {
  return (
    <Radio.Group {...props}>
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
  );
};
