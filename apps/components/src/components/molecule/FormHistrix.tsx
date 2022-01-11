import { FormControl, IFormControlProps } from 'native-base';
import React, { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { T } from '../../Interfaces';

import { DynamicForm } from './DynamicForm';

interface props extends IFormControlProps {
  defaultValues: T;
  dynamic?: string;
}

export const FormHistrix: FC<props> = ({
  defaultValues,
  dynamic,
  children,
  ...props
}) => {
  const methods = useForm({ defaultValues });
  const {
    formState: { errors },
  } = methods;
  return (
    <FormControl isInvalid={Object.keys(errors).length !== 0} {...props}>
      <FormProvider {...methods}>
        {!dynamic ? (
          { children }
        ) : (
          <>
            <DynamicForm dynamic={dynamic} />
            {children}
          </>
        )}
      </FormProvider>
    </FormControl>
  );
};
