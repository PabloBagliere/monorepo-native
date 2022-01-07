/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FormControl, Stack } from 'native-base';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { ContextForm } from '../../context';
import { T } from '../../Interfaces';

import { DynamicForm } from './DynamicForm';

interface props {
  defaultValues: T;
  dynamic?: string;
}

export const FormHistrix: FC<props> = ({
  defaultValues,
  dynamic,
  children,
}) => {
  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormControl isInvalid={Object.keys(errors).length !== 0}>
      <Stack mx="4">
        <ContextForm.Provider value={{ handleSubmit, errorComponent: errors }}>
          {!dynamic ? (
            React.Children.map(children, (child) => {
              // @ts-ignore
              return child.props.name
                ? // @ts-ignore
                  React.createElement(child.type, {
                    ...{
                      // @ts-ignore
                      ...child.props,
                      register: methods.register,
                      control: methods.control,
                      // @ts-ignore
                      key: child.props.name,
                    },
                  })
                : child;
            })
          ) : (
            <>
              <DynamicForm
                dynamic={dynamic}
                register={methods.register}
                control={methods.control}
              />
              {children}
            </>
          )}
        </ContextForm.Provider>
      </Stack>
    </FormControl>
  );
};
