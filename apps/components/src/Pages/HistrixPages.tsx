import { Text } from 'native-base';
import React, { FC, useContext } from 'react';
import useSWR from 'swr';

import { LoadingHistrix } from '../components/atomic/Loading';
import ContextUser from '../context/ContextUser';
import { paramsObtions } from '../Interfaces/optionsResponse/paramsObtions';
import { typeConsulta } from '../Interfaces/optionsResponse/typeConsulta';

import { HistrixCrud } from './HistrixCrud';

interface props {
  title: string;
  query: string;
  option?: string;
  rel?: string;
}

export const HistrixPages: FC<props> = ({
  title,
  query,
  option,
  rel,
}): JSX.Element => {
  const { isSetToken } = useContext(ContextUser);
  const { data, error } = useSWR<paramsObtions>(
    isSetToken
      ? {
          url: query,
          config: {
            method: 'OPTIONS',
            params: {
              _title: title,
            },
          },
        }
      : null,
  );
  if (!data) {
    return <LoadingHistrix />;
  }
  if (error) {
    return <Text>Error:</Text>;
  }
  switch (data.schema.type) {
    case typeConsulta.crud:
      return (
        <HistrixCrud
          fiels={data.schema.fields}
          query={{ url: query, title }}
          numberTotal={data.schema.number_of_fields}
        />
      );

    default:
      return <Text>Prueba</Text>;
      break;
  }
};
