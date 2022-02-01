import { Box, HStack, Skeleton, Text } from 'native-base';
import React, { FC, ReactElement } from 'react';

interface props {
  title?: string | ReactElement | ReactElement[];
  Value?: string | ReactElement | ReactElement[];
}

export const ItemHistrix: FC<props> = ({ title, Value }): JSX.Element => {
  if (Value && typeof Value !== 'string') {
    return <Box my="1">{Value}</Box>;
  }
  return (
    <Box my="1">
      <HStack justifyContent="space-between">
        {title ? <Text>{title}</Text> : null}
        {Value ? <Text>{Value}</Text> : <Skeleton.Text lines={1} w="1/2" />}
      </HStack>
    </Box>
  );
};
