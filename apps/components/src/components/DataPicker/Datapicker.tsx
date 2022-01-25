import React, { FC, useContext, useState } from 'react';
import { Platform } from 'react-native';
import { IButtonProps, View } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Controller } from 'react-hook-form';

import Context from '../../context/ContextForm';
import { formBasic, T } from '../../Interfaces';
import { AtomicButton } from '../atomic/Button';
import { InputsFormLayout } from '../../layouts';
import { FormMessageError } from '../atomic/FormMessageError';
import { FormMessageHelper } from '../atomic/FormMessageHelper';

interface props extends Omit<formBasic, 'styleLabel'> {
  styleLabel?: IButtonProps;
  onChange?: T;
}

export const AtomicDatapicker: FC<props> = ({
  label,
  name,
  styleLabel,
  styleError,
  styleLayout,
  styleMessage,
  message,
  rules,
  onChange,
  isDisabled,
}): JSX.Element => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<Date>(new Date());
  const { control, register } = useContext(Context);

  const change = (event: T, selectedDate: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setValue(selectedDate);
      onChange(selectedDate);
    }
  };
  const showMode = () => {
    setShow(true);
  };
  return !control ? (
    <View>
      <View>
        <AtomicButton
          onPress={showMode}
          {...styleLabel}
          isDisabled={isDisabled}
        >
          {label}
        </AtomicButton>
      </View>
      <View></View>
      {show && (
        <DateTimePicker
          is24Hour
          {...register(name)}
          onChange={change}
          mode="date"
          value={value}
        />
      )}
    </View>
  ) : (
    <InputsFormLayout {...styleLayout}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <View>
            <View>
              <AtomicButton
                onPress={showMode}
                {...styleLabel}
                isDisabled={isDisabled}
              >
                {label}
              </AtomicButton>
            </View>
            <View></View>
            {show && (
              <DateTimePicker
                is24Hour
                {...register(name)}
                onChange={(event, selectedDate) => {
                  setShow(Platform.OS === 'ios');
                  if (selectedDate) {
                    field.onChange(selectedDate);
                  }
                }}
                mode="date"
                value={field.value}
              />
            )}
          </View>
        )}
      />
      {message ? (
        <FormMessageHelper {...styleMessage}>{message}</FormMessageHelper>
      ) : null}
      <FormMessageError {...styleError} name={name} />
    </InputsFormLayout>
  );
};
