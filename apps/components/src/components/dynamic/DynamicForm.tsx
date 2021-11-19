import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';

import { dynamicForm, reponseWatch } from '../../Interfaces';
import { FieldHistrix } from '../molecule';
import { dynamicContext } from '../../context';
import { separatorFormat } from '../../utilis';

export interface props {
  dataInputs: Array<dynamicForm>;
  watchList?: Array<string>;
  watchFuntion?: (response: reponseWatch) => void;
  children?: React.ReactElement | React.ReactElement[];
}

export const DynamicFormHOC: FC<props> = ({
  dataInputs,
  watchList,
  watchFuntion,
  children,
}): JSX.Element => {
  const { data, validation } = separatorFormat(dataInputs);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: data, resolver: yupResolver(validation) });

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
        if (name === data) {
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
      }}
    >
      {dataInputs.map((value, index) => {
        return <FieldHistrix key={index} inputProp={value} />;
      })}
      {children}
    </dynamicContext.Provider>
  );
};
