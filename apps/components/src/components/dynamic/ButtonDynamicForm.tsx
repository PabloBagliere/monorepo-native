import { Button, IButtonProps } from 'native-base';
import { FC, useContext } from 'react';

import { T } from '../../Interfaces';

import { dynamicContext } from './DynamicForm';

export interface props {
  onSubmit: (value: T) => void;
  buttonProps?: IButtonProps;
  children?: React.ReactElement | React.ReactElement[] | string;
}

export const ButtonDynamicForm: FC<props> = ({
  onSubmit,
  buttonProps,
  children,
}): JSX.Element => {
  const { handleSubmit } = useContext(dynamicContext);

  return (
    <Button {...buttonProps} onPress={handleSubmit(onSubmit)}>
      {children}
    </Button>
  );
};
