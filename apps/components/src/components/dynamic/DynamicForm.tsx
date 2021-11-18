import React, { createContext, FC } from 'react';
import { Control, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';

import useFormValidation from '../../hooks/useFormValidation';
import { dynamicForm, T, reponseWatch } from '../../Interfaces';
import { FieldHistrix } from '../molecule/fieldHistrix';

export interface props {
  dataInputs: Array<dynamicForm>;
  watchList?: Array<string>;
  watchFuntion?: (response: reponseWatch) => void;
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
  watchList,
  watchFuntion,
  children,
}): JSX.Element => {
  const { defaultValues, validationSchema, updateStateValidation } =
    useFormValidation(dataInputs);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) });

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!watchFuntion) return;
      if (!watchList) {
        const response = {
          nameUpdate: name,
          valueUpdate: value[name],
          typeUpdate: type,
          valueComplet: value,
        };
        watchFuntion(response);
        return;
      }
      watchList.map((data) => {
        if (value[data]) {
          const response = {
            nameUpdate: name,
            valueUpdate: value[name],
            typeUpdate: type,
            valueComplet: value,
          };
          watchFuntion(response);
        }
      });
    });
    return () => subscription.unsubscribe();
  }, [watch, watchFuntion, watchList]);

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
