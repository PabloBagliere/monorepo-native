import { FormHistrix } from 'components-app-histrix';
import { useState } from 'react';

function Login() {
  const [status, setStatus] = useState(null);
  return (
    <FormHistrix
      w="100%"
      h="100%"
      defaultValues={{}}
      template={{ action: setStatus, type: 'login' }}
    />
  );
}

export default Login;
