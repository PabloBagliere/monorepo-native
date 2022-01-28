import { Center, ScrollView } from 'native-base';
import React, { FC } from 'react';

import { fieldsParmas } from '../../Interfaces/optionsResponse/fieldsParams';
import { valuesParmas } from '../../Interfaces/optionsResponse/valuesParams';
import { CardHistrix } from '../atomic/Card';
import { ItemHistrix } from '../atomic/Item';

interface props {
  labelFormat: [string, fieldsParmas][];
  valuesFormat?: [string, valuesParmas][];
}

export const TableHistrix: FC<props> = ({
  labelFormat,
  valuesFormat,
}): JSX.Element => {
  return (
    <ScrollView
      _contentContainerStyle={{
        px: '20px',
        mb: '4',
      }}
    >
      <Center>
        <CardHistrix>
          {labelFormat.map((value) => (
            <ItemHistrix key={value[1].name} title={value[1].title} />
          ))}
        </CardHistrix>
      </Center>
    </ScrollView>
  );
};
