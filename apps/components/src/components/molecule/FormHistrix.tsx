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
  return (
    <FormControl isInvalid={Object.keys(errors).length !== 0} w="100%" h="100%" {...props}>
      <FormProvider {...methods}>
        {template ? <FormLogin action={template.action} /> : dynamic ? <>
          <DynamicForm dynamic={dynamic} />
          {children}
        </> : children }
      </FormProvider>
    </FormControl>
  )
};
