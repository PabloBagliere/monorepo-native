import { Options } from 'Interfaces';
import {
  ISelectProps,
  Select,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'native-base';
import { FC } from 'react';

interface props extends ISelectProps {
  options: Array<Options>;
  refPersonal: any;
}

export const AtomicSelect: FC<props> = ({
  options,
  refPersonal,
  ...props
}): JSX.Element => {
  return (
    <Select
      dropdownOpenIcon={<ChevronUpIcon size="4" />}
      dropdownCloseIcon={<ChevronDownIcon size="4" />}
      {...props}
      ref={refPersonal}
    >
      {options.map((value) => {
        return (
          <Select.Item key={value.id} label={value.label} value={value.value} />
        );
      })}
    </Select>
  );
};
