import { FormHistrix } from 'components-app-histrix';
import { useState } from 'react';

function Login() {
  const [status, setStatus] = useState(null);
  return (
    <FormHistrix
      defaultValues={{}}
      template={{ action: setStatus, type: 'login' }}
    />
  );
}

export default Login;
