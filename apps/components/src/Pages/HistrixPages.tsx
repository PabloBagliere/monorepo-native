// TODO: pasar params para todos los necesarios
// TODO: Arrelgar require cycle.

import { Text } from 'native-base';
import React, { FC, useContext } from 'react';
import useSWR from 'swr';

import { LoadingHistrix } from '../components/atomic/Loading';
import ContextUser from '../context/ContextUser';
import { paramsObtions } from '../Interfaces/optionsResponse/paramsObtions';
import { typeConsulta } from '../Interfaces/optionsResponse/typeConsulta';

import { HistrixCrud } from './HistrixCrud';

interface props {
  query: string;
  params: {
    [key: string]: string;
  };
  option?: string;
  rel?: string;
}

export const HistrixPages: FC<props> = ({
  query,
  params,
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
              params,
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
          url={query}
          params={params}
          numberTotal={data.schema.number_of_fields}
        />
      );

    default:
      return <Text>Prueba</Text>;
      break;
  }
};
