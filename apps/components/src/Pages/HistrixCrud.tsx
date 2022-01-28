import React, { FC, useMemo } from 'react';

import { TableHistrix } from '../components/molecule/TableHistrix';
import { fieldsParmas } from '../Interfaces/optionsResponse/fieldsParams';
import { valuesParmas } from '../Interfaces/optionsResponse/valuesParams';
import { deleteHidden } from '../utils/formatDataUse';

interface props {
  numberTotal: number;
  fiels: { [key: string]: fieldsParmas };
  values: { [key: string]: valuesParmas };
}

export const HistrixCrud: FC<props> = ({ fiels }): JSX.Element => {
  const memo: [string, fieldsParmas][] = useMemo(
    () => deleteHidden(fiels),
    [fiels],
  );
  return (
    <>
      <TableHistrix labelFormat={memo} valuesFormat={[]} />
    </>
  );
};
