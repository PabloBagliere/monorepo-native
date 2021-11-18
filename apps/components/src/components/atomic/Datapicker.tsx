import React, { FC, useState } from 'react';
import { Platform } from 'react-native';
import { View, Button } from 'native-base';
import DateTimePicker, {
  BaseProps,
} from '@react-native-community/datetimepicker';

import { T } from '../../Interfaces';

interface props extends BaseProps {
  setNewDate: T;
}

export const AtomicDatapicker: FC<props> = ({
  setNewDate,
  value,
  ...props
}): JSX.Element => {
  const [show, setShow] = useState(false);

  const change = (event: T, selectedDate: Date) => {
    setShow(Platform.OS === 'ios');
    setNewDate(selectedDate);
  };
  const showMode = () => {
    setShow(true);
  };

  return (
    <View>
      <View>
        <Button onPress={showMode}>Selecionar</Button>
      </View>
      <View></View>
      {show && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={change}
          {...props}
        />
      )}
    </View>
  );
};
