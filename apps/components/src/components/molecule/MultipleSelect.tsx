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
import React, { FC, useContext, useState } from 'react';
import { Controller } from 'react-hook-form';

import Context from '../../context/ContextForm';
import { formBasic, Options, T } from '../../Interfaces';
import { InputsFormLayout } from '../../layouts';
import { AtomicButton, AtomicCheckbox } from '../atomic';
import { FormMessageError } from '../atomic/FormMessageError';
import { FormMessageHelper } from '../atomic/FormMessageHelper';

interface props extends ICheckboxGroupProps, formBasic {
  label: string;
  options: Array<Options>;
  styleButton?: IButtonProps;
}

export const MultipleSelect: FC<props> = ({
  options,
  label,
  styleButton,
  defaultValue,
  onChange,
  name,
  rules,
  styleLayout,
  styleError,
  styleMessage,
  message,
  ...props
}): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclose();
  const [select, setSelect] = useState<Array<T>>(defaultValue);
  const setNewSelect = (value) => {
    setSelect((preStete) => {
      const newState = preStete.filter((val) => val !== value);
      onChange(newState);
      return newState;
    });
  };
  const { control } = useContext(Context);

  return !control ? (
    <>
      <AtomicButton onPress={onOpen} {...styleButton}>
        {label}
      </AtomicButton>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <AtomicCheckbox
            name={name}
            options={options}
            multiple={setSelect}
            defaultValue={select}
            onChange={onChange}
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
                onPress={() => setNewSelect(value)}
                variant="ghost"
                icon={<CloseIcon size="4" />}
              />
            </Badge>
          );
        })}
      </HStack>
    </>
  ) : (
    <InputsFormLayout {...styleLayout}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <AtomicButton onPress={onOpen} {...styleButton}>
              {label}
            </AtomicButton>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <AtomicCheckbox
                  name={name}
                  options={options}
                  multiple={setSelect}
                  defaultValue={select}
                  onChange={(value) => {
                    field.onChange(value);
                    onChange(value);
                  }}
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
                      onPress={() => setNewSelect(value)}
                      variant="ghost"
                      icon={<CloseIcon size="4" />}
                    />
                  </Badge>
                );
              })}
            </HStack>
          </>
        )}
      />
      {message ? (
        <FormMessageHelper {...styleMessage}>{message}</FormMessageHelper>
      ) : null}
      <FormMessageError {...styleError} name={name} />
    </InputsFormLayout>
  );
};
