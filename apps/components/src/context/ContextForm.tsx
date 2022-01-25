import React, { createContext, FC } from 'react';
import {
  UseFormHandleSubmit,
  FieldValues,
  UseFormRegister,
  Control,
  FormState,
} from 'react-hook-form';

interface contextProps {
  handleSubmit: UseFormHandleSubmit<FieldValues> | null;
  register: UseFormRegister<FieldValues> | null;
  control: Control<FieldValues, object> | null;
  formState: FormState<FieldValues> | null;
}

const Context = createContext({
  control: null,
  handleSubmit: null,
  register: null,
  formState: null,
} as contextProps);

export const ContextForm: FC<contextProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
};

export default Context;
