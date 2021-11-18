import { createContext, FC } from 'react';
import { Control, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';

import useFormValidation from '../../hooks/useFormValidation';
import { dynamicForm, T } from '../../Interfaces';
import { FieldHistrix } from '../molecule/fieldHistrix';

export interface props {
  dataInputs: Array<dynamicForm>;
  children?: React.ReactElement | React.ReactElement[];
}

interface dynamicContextProps {
  handleSubmit: UseFormHandleSubmit<{ [key: string]: T }>;
  controlComponent: Control;
  errorComponent: { [x: number]: T; [x: string]: T };
  updateValidation: T;
}

export const dynamicContext = createContext({} as dynamicContextProps);

export const DynamicFormHOC: FC<props> = ({
  dataInputs,
  children,
}): JSX.Element => {
  const { defaultValues, validationSchema, updateStateValidation } =
    useFormValidation(dataInputs);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) });

  return (
    <dynamicContext.Provider
      value={{
        handleSubmit,
        controlComponent: control,
        errorComponent: errors,
        updateValidation: updateStateValidation,
      }}
    >
      {dataInputs.map((value, index) => {
        return <FieldHistrix key={index} inputProp={value} />;
      })}
      {children}
    </dynamicContext.Provider>
  );
};
