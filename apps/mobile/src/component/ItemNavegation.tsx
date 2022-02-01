/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigation } from '@react-navigation/native';
import { ParamsUse } from 'components-app-histrix';
import { Pressable } from 'native-base';
import * as React from 'react';

export const ItemNavegation: React.FC<ParamsUse> = ({
  query,
  params,
  children,
}): JSX.Element => {
  const navigation = useNavigation();
  return (
    <Pressable
      px="5"
      py="3"
      rounded="md"
      onPress={() => {
        // @ts-ignore
        navigation.navigate('Auth', { query, params });
      }}
    >
      {children}
    </Pressable>
  );
};
