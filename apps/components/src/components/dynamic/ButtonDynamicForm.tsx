import { IButtonProps } from 'native-base';
import React, { FC, useContext } from 'react';

import { T } from '../../Interfaces';
import { dynamicContext } from '../../context';
import { AtomicButton } from '../atomic';

export interface props extends IButtonProps {
  onSubmit: (value: T) => void;
}

export const ButtonDynamicForm: FC<props> = ({
  onSubmit,
  children,
  ...props
}): JSX.Element => {
  const { handleSubmit } = useContext(dynamicContext);

  return (
    <AtomicButton onPress={handleSubmit(onSubmit)} {...props}>
      {children}
    </AtomicButton>
  );
};
