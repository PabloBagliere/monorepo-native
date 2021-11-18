import {
  ISelectProps,
  Select,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'native-base';
import React, { FC } from 'react';

import { Options } from '../../Interfaces';

interface props extends ISelectProps {
  options: Array<Options>;
}

export const AtomicSelect: FC<props> = ({ options, ...props }): JSX.Element => {
  return (
    <Select
      dropdownOpenIcon={<ChevronUpIcon size="4" />}
      dropdownCloseIcon={<ChevronDownIcon size="4" />}
      {...props}
    >
      {options.map((value) => {
        return (
          <Select.Item key={value.id} label={value.label} value={value.value} />
        );
      })}
    </Select>
  );
};
