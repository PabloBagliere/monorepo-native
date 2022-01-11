// TODO: Refactorizar meter la label, mensaje de ayuda y el de error aqui dentro y no en cada componente aparte.

import { IStackProps, Stack } from 'native-base';
import React, { FC } from 'react';

type props = IStackProps;

export const InputsFormLayout: FC<props> = ({
  children,
  ...props
}): JSX.Element => {
  const propsDefault: IStackProps = {
    mb: '2.5',
    mt: '1.5',
    mx: '1',
    direction: 'column',
    alignItems: 'center',
  };
  const PropsUnited = Object.assign(propsDefault, props);

  return <Stack {...PropsUnited}>{children}</Stack>;
};
