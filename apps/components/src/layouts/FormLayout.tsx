import { useBreakpointValue, View } from 'native-base';
import React, { FC } from 'react';

export const FormLayout: FC = ({ children }): JSX.Element => {
  const flexDir = useBreakpointValue({
    sm: 'column',
    lg: 'row',
  });
  return (
    <View style={{ flexDirection: flexDir }} nativeID="holaPrueba">
      {children}
    </View>
  );
};
