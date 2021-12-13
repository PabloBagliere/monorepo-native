// DateTimePicker.web.ts
import React, { useEffect, useRef, ReactElement } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { format } from 'date-fns';

import { T } from '../../Interfaces';

interface Props extends TextInputProps {
  minimumDate: Date;
  maximumDate: Date;
  value: string;
  onChange: (value: T) => void;
  type: string;
  // ...more
}

function DateInput(props: Props): ReactElement {
  const { minimumDate, maximumDate, ...moreProps } = props;

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef?.current?.setNativeProps({
        type: 'date',
        min: format(minimumDate, 'yyyy-MM-dd'),
        max: format(maximumDate, 'yyyy-MM-dd'),
        pattern: 'd{4}-d{2}-d{2}',
      });
    }
  }, [inputRef?.current]);

  return <TextInput ref={inputRef} {...moreProps} />;
}

export default DateInput;
