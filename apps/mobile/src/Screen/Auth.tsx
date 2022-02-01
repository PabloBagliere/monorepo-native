import { HistrixPages } from 'components-app-histrix';
import React, { FC } from 'react';

import { propsAuth } from '../Interfaces/routers';

export const AuthScreen: FC<propsAuth> = ({ route }): JSX.Element => {
  const { query, params } = route.params;

  return <HistrixPages query={query} params={params} />;
};
