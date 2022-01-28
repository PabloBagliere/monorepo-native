import { FormHistrix } from 'components-app-histrix';
import { KeyboardAvoidingView } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { propsLogin } from '../Interfaces/routers';

export const LoginScreen: FC<propsLogin> = ({ navigation }): JSX.Element => {
  const [status, setStatus] = useState<null | boolean>(null);
  useEffect(() => {
    if (status) {
      navigation.navigate('Home');
    }
  }, [navigation, status]);
  return (
    <KeyboardAvoidingView
      h={{
        base: '400px',
        lg: 'auto',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FormHistrix
        defaultValues={{}}
        template={{ action: setStatus, type: 'login' }}
      />
    </KeyboardAvoidingView>
  );
};
