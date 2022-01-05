import { FormControl } from 'native-base';
import React from 'react';
import { useForm } from 'react-hook-form';

import { ContextForm } from '../../context';

export const FormHistrix = ({ defaultValues, children }) => {
  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormControl>
      <ContextForm.Provider value={{ handleSubmit, errorComponent: errors }}>
        {React.Children.map(children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  control: methods.control,
                  key: child.props.name,
                },
              })
            : child;
        })}
      </ContextForm.Provider>
    </FormControl>
  );
};
