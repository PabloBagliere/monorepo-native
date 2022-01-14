import { FormHistrix } from 'components-app-histrix';
import React, { FC, useState } from 'react';

export const Login: FC = (): JSX.Element => {
  const [status, setStatus] = useState<null | boolean>(null);
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
