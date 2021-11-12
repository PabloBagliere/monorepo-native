import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import * as Yup from 'yup';
import { Button, IButtonProps } from 'native-base';

import { dynamicForm, T } from '../Interfaces';

import { InputHistrix } from './InputHistrix';

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
interface props {
  dataInputs: Array<dynamicForm>;
  onSubmit: (value: T) => void;
  textButton: string;
  propsButton?: IButtonProps;
}

export const DynamicForm: FC<props> = ({
  dataInputs,
  onSubmit,
  textButton,
  propsButton,
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
    <>
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
      <Button onPress={handleSubmit(onSubmit)} {...propsButton}>
        {textButton}
      </Button>
    </>
  );
};
