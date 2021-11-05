import { useState } from 'react';

const useForm = (inputProps: any) => {
  const [value, setValue] = useState('');
  const onChange = ({ nativeEvent }) => {
    setValue(nativeEvent.text);
  };

  return {
    ...inputProps,
    value,
    onChange,
  };
};

export default useForm;
