import { Options, T } from 'Interfaces';
import { Checkbox, ICheckboxGroupProps, ICheckboxProps } from 'native-base';
import { FC } from 'react';

interface props extends ICheckboxGroupProps {
  options: Array<Options>;
  multiple?: (value: T) => void;
}

export const AtomicCheckbox: FC<props> = ({
  options,
  onChange,
  multiple,
  ...props
}): JSX.Element => {
  return (
    <Checkbox.Group
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
  );
};
