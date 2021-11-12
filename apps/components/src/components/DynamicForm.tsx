import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import * as Yup from 'yup';
import { Button } from 'native-base';

import { dynamicForm, T } from '../Interfaces';

import { InputHistrix } from './InputHistrix';

interface props {
  dataInputs: Array<dynamicForm>;
  onSubmit: (value: T) => void;
  textButton: string;
}

export const DynamicForm: FC<props> = ({
  dataInputs,
  onSubmit,
  textButton,
}): JSX.Element => {
  const defaultValues: { [key: string]: T } = {};
  const requiredField: { [key: string]: T } = {};
  useEffect(() => {
    for (const input of dataInputs) {
      defaultValues[input.name] = input.value;

      if (!input.validations) continue;

      let schema = Yup.string();

      for (const rule of input.validations) {
        if (rule.value) {
          schema = schema[rule.type](rule.value, rule.message);
        } else {
          schema = schema[rule.type](rule.message);
        }
      }
      requiredField[input.name] = schema;
    }
  }, [dataInputs]);

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
      <Button onPress={handleSubmit(onSubmit)}>{textButton}</Button>
    </>
  );
};
