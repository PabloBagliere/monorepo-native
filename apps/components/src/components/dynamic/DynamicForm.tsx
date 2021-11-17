import { createContext, FC } from 'react';
import { useForm, UseFormHandleSubmit } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';

import useFormValidation from '../../hooks/useFormValidation';
import { dynamicForm, T } from '../../Interfaces';
import { InputHistrix } from '../InputHistrix';

export interface props {
  dataInputs: Array<dynamicForm>;
  children?: React.ReactElement | React.ReactElement[];
}

interface dynamicContextProps {
  handleSubmit: UseFormHandleSubmit<{ [key: string]: T }>;
}

export const dynamicContext = createContext({} as dynamicContextProps);

export const DynamicFormHOC: FC<props> = ({
  dataInputs,
  children,
}): JSX.Element => {
  const { defaultValues, validationSchema } = useFormValidation(dataInputs);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) });

  return (
    <dynamicContext.Provider
      value={{
        handleSubmit,
      }}
    >
      {dataInputs.map((value, index) => {
        return (
          <InputHistrix
            key={index}
            inputProp={value}
            control={control}
            error={errors}
          />
        );
      })}
      {children}
    </dynamicContext.Provider>
  );
};
