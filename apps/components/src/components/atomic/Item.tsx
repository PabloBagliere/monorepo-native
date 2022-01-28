import { Box, HStack, Skeleton, Text } from 'native-base';
import React, { FC, ReactElement } from 'react';

interface props {
  title?: string | ReactElement | ReactElement[];
  value?: string | ReactElement | ReactElement[];
}

export const ItemHistrix: FC<props> = ({ title, value }): JSX.Element => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        {title ? <Text>{title}</Text> : null}
        {value ? <Text>{value}</Text> : <Skeleton.Text lines={1} w="1/2" />}
      </HStack>
    </Box>
  );
};
