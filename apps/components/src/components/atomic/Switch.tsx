import { ISwitchProps, Switch } from 'native-base';
import React, { FC } from 'react';

type props = ISwitchProps;

export const AtomicSwitch: FC<props> = ({ ...props }): JSX.Element => {
  return <Switch {...props} />;
};
