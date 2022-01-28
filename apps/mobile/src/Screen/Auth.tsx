import { Box, Text } from 'native-base';
import React, { FC } from 'react';

import { propsAuth } from '../Interfaces/routers';

export const AuthScreen: FC<propsAuth> = ({ route }): JSX.Element => {
  const { query, title } = route.params;

  return (
    <Box>
      <Text>Hola</Text>
      <Text>{title}</Text>
      <Text>{query}</Text>
    </Box>
  );
};
