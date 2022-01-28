import { HistrixPages } from 'components-app-histrix';
import React, { FC } from 'react';

import { propsAuth } from '../Interfaces/routers';

export const AuthScreen: FC<propsAuth> = ({ route }): JSX.Element => {
  const { query, title } = route.params;

  return <HistrixPages title={title} query={query} />;
};
