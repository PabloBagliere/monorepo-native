import { FormHistrix } from 'components-app-histrix';
import React, { FC, useEffect, useState } from 'react';

import { propsLogin } from '../Interfaces/routers';

export const LoginScreen: FC<propsLogin> = ({ navigation }): JSX.Element => {
  const [status, setStatus] = useState<null | boolean>(null);
  useEffect(() => {
    if (status) {
      navigation.navigate('Home');
    }
  }, [navigation, status]);
  return (
    <>
      <FormHistrix
        defaultValues={{}}
        template={{ action: setStatus, type: 'login' }}
      />
      {status}
    </>
  );
};
