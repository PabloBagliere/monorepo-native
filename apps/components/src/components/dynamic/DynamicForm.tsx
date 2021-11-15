import { createContext, FC } from 'react';
import { useForm, UseFormHandleSubmit } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import * as Yup from 'yup';

import { dynamicForm, T } from '../../Interfaces';
import { InputHistrix } from '../InputHistrix';

const defaultDataSeparator = (value): { [key: string]: T } => {
  const dataSeparator = {};
  for (const input of value) {
    dataSeparator[input.name] = input.value;
  }
  return dataSeparator;
};

const dataRequiredValidation = (value): { [key: string]: T } => {
  const prueba = {};
  for (const input of value) {
    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
      if (rule.value) {
        schema = schema[rule.type](rule.value, rule.message);
      } else {
        schema = schema[rule.type](rule.message);
      }
    }
    prueba[input.name] = schema;
  }
  return prueba;
};
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
  const defaultValues: { [key: string]: T } = defaultDataSeparator(dataInputs);
  const requiredField: { [key: string]: T } =
    dataRequiredValidation(dataInputs);

  const validationSchema = Yup.object({ ...requiredField });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) });

  return (
    <dynamicContext.Provider value={{ handleSubmit }}>
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
