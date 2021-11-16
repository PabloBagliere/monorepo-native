import { Options, T } from 'Interfaces';
import {
  Actionsheet,
  Badge,
  Button,
  HStack,
  ICheckboxGroupProps,
  useDisclose,
} from 'native-base';
import { FC, useState } from 'react';

import { AtomicCheckbox } from '../atomic';

interface props extends ICheckboxGroupProps {
  label: string;
  options: Array<Options>;
}

export const MultipleSelect: FC<props> = ({
  options,
  label,
  defaultValue,
  ...props
}): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclose();
  const [select, setSelect] = useState<Array<T>>(defaultValue);
  return (
    <>
      <Button onPress={onOpen}>{label}</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <AtomicCheckbox
            options={options}
            multiple={setSelect}
            defaultValue={select}
            {...props}
          />
        </Actionsheet.Content>
      </Actionsheet>
      <HStack space={{ base: 2, md: 4 }} mx={{ base: 'auto', md: 0 }}>
        {select.map((value, index) => {
          return (
            <Badge key={index} colorScheme="info">
              {value}
            </Badge>
          );
        })}
      </HStack>
    </>
  );
};
