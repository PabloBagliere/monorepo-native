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
    direction: 'column',
    space: 3,
  };
  const PropsUnited = Object.assign(propsDefault, props);

  return <Stack {...PropsUnited}>{children}</Stack>;
};
