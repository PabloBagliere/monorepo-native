import React, { FC, useState } from 'react';
import { Platform } from 'react-native';
import { IButtonProps, View } from 'native-base';
import DateTimePicker, {
  AndroidNativeProps,
} from '@react-native-community/datetimepicker';

import { T } from '../../Interfaces';

import { AtomicButton } from './Button';

interface props extends AndroidNativeProps {
  setNewDate: T;
  label: string;
  propsButton?: IButtonProps;
}

export const AtomicDatapicker: FC<props> = ({
  setNewDate,
  label,
  propsButton,
  ...props
}): JSX.Element => {
  const [show, setShow] = useState(false);

  const change = (event: T, selectedDate: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setNewDate(selectedDate);
    }
  };
  const showMode = () => {
    setShow(true);
  };
  return (
    <View>
      <View>
        <AtomicButton onPress={showMode} {...propsButton}>
          {label}
        </AtomicButton>
      </View>
      <View></View>
      {show && <DateTimePicker is24Hour onChange={change} {...props} />}
    </View>
  );
};
