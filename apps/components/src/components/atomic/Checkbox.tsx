import { Checkbox, ICheckboxGroupProps, ICheckboxProps } from 'native-base';
import { FC } from 'react';

import { Options } from '../../Interfaces';

interface props extends ICheckboxGroupProps {
  options: Array<Options>;
}

export const AtomicCheckbox: FC<props> = ({
  options,
  onChange,
  ...props
}): JSX.Element => {
  return (
    <Checkbox.Group
      onChange={(value) => {
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
  );
};
