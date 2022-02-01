import React, { FC, useMemo } from 'react';
import { Fab, Icon, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { TableHistrix } from '../components/molecule/TableHistrix';
import { useGetRequestXml } from '../hooks';
import { fieldsParmas } from '../Interfaces/optionsResponse/fieldsParams';
import { paramsResources } from '../Interfaces/optionsResponse/paramsResources';
import { deleteHidden } from '../utils/formatDataUse';

interface props {
  numberTotal: number;
  fiels: { [key: string]: fieldsParmas };
  url: string;
  params: {
    [key: string]: string;
  };
  actions: paramsResources;
}

export const HistrixCrud: FC<props> = ({
  fiels,
  url,
  params,
  actions,
}): JSX.Element => {
  const { Date, isError, isLoading } = useGetRequestXml({
    query: url,
    params: {
      params: {
        _dt: 'table[object Object]',
        _sortBy: 'desc|asc',
        params,
      },
    },
  });
  const memo: [string, fieldsParmas][] = useMemo(
    () => deleteHidden(fiels),
    [fiels],
  );
  if (isError) return <Text>Error</Text>;
  // TODO: Unir los dos en uno solo.
  if (isLoading)
    return (
      <TableHistrix
        labelFormat={memo}
        paramsParent={params}
        isUpdate={actions.PUT ? true : false}
        isDelete={actions.DELETE ? true : false}
      />
    );
  return (
    <>
      <TableHistrix
        labelFormat={memo}
        valuesFormat={Date.data.slice(0, 6)}
        paramsParent={params}
        isUpdate={actions.PUT ? true : false}
        isDelete={actions.DELETE ? true : false}
      />
      {actions.POST ? (
        <Fab
          renderInPortal={false}
          shadow={2}
          size="sm"
          icon={<Icon color="white" as={MaterialIcons} name="add" size="sm" />}
          onPress={() => console.log('add')}
        />
      ) : null}
    </>
  );
};
