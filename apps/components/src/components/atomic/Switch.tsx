import { ISwitchProps, Switch } from 'native-base';
import { FC } from 'react';

type props = ISwitchProps;

export const AtomicSwitch: FC<props> = ({ ...props }): JSX.Element => {
  return <Switch {...props} />;
};
