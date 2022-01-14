import { FormControl, IFormControlProps } from 'native-base';
import React, { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { T } from '../../Interfaces';
import { FormLogin } from '../organism/FormLogin';

import { DynamicForm } from './DynamicForm';

interface props extends IFormControlProps {
  defaultValues: T;
  template?: {
    type: string;
    action: T;
  };
  dynamic?: string;
}

export const FormHistrix: FC<props> = ({
  defaultValues,
  dynamic,
  children,
  template,
  ...props
}) => {
  const methods = useForm({ defaultValues });
  const {
    formState: { errors },
  } = methods;
  if (template) {
    return (
      <FormControl isInvalid={Object.keys(errors).length !== 0} {...props}>
        <FormProvider {...methods}>
          <FormLogin action={template.action} />
        </FormProvider>
      </FormControl>
    );
  }
  if (dynamic) {
    return (
      <FormControl isInvalid={Object.keys(errors).length !== 0} {...props}>
        <FormProvider {...methods}>
          <>
            <DynamicForm dynamic={dynamic} />
            {children}
          </>
        </FormProvider>
      </FormControl>
    );
  }
  return (
    <FormControl isInvalid={Object.keys(errors).length !== 0} {...props}>
      <FormProvider {...methods}>{children}</FormProvider>
    </FormControl>
  );
};
