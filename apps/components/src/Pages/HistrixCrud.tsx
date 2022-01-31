import { Text } from 'native-base';
import React, { FC, useMemo } from 'react';

import { TableHistrix } from '../components/molecule/TableHistrix';
import { useGetRequestXml } from '../hooks';
import { fieldsParmas } from '../Interfaces/optionsResponse/fieldsParams';
import { deleteHidden } from '../utils/formatDataUse';

interface props {
  numberTotal: number;
  fiels: { [key: string]: fieldsParmas };
  query: {
    url: string;
    title: string;
  };
}

export const HistrixCrud: FC<props> = ({ fiels, query }): JSX.Element => {
  const { Date, isError, isLoading } = useGetRequestXml({
    query: query.url,
    params: {
      params: {
        _title: query.title,
        _dt: 'table[object Object]',
        _sortBy: 'desc|asc',
      },
    },
  });
  const memo: [string, fieldsParmas][] = useMemo(
    () => deleteHidden(fiels),
    [fiels],
  );
  if (isError) return <Text>Error</Text>;
  if (isLoading) return <TableHistrix labelFormat={memo} />;
  return (
    <TableHistrix labelFormat={memo} valuesFormat={Date.data.slice(0, 6)} />
  );
};
