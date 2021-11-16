import { Options } from 'Interfaces';
import { Checkbox, ICheckboxGroupProps, ICheckboxProps } from 'native-base';
import { FC } from 'react';

interface props extends ICheckboxGroupProps {
  options: Array<Options>;
}

export const AtomicCheckbox: FC<props> = ({
  options,
  ...props
}): JSX.Element => {
  return (
    <Checkbox.Group {...props}>
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
