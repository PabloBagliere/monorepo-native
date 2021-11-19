import {
  Actionsheet,
  Badge,
  CloseIcon,
  HStack,
  IButtonProps,
  ICheckboxGroupProps,
  IconButton,
  useDisclose,
} from 'native-base';
import React, { FC, useState } from 'react';

import { Options, T } from '../../Interfaces';
import { AtomicButton, AtomicCheckbox } from '../atomic';

interface props extends ICheckboxGroupProps {
  label: string;
  options: Array<Options>;
  propsButton?: IButtonProps;
}

export const MultipleSelect: FC<props> = ({
  options,
  label,
  propsButton,
  defaultValue,
  ...props
}): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclose();
  const [select, setSelect] = useState<Array<T>>(defaultValue);
  return (
    <>
      <AtomicButton onPress={onOpen} {...propsButton}>
        {label}
      </AtomicButton>
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
              <IconButton
                onPress={() => setSelect(select.filter((val) => val !== value))}
                variant="ghost"
                icon={<CloseIcon size="4" />}
              />
            </Badge>
          );
        })}
      </HStack>
    </>
  );
};
