import { Center, ScrollView } from 'native-base';
import React, { FC, ReactElement } from 'react';

import { paramsResponseGet } from '../../Interfaces/api/getRespose/paramsResponseGet';
import { fieldsParmas } from '../../Interfaces/optionsResponse/fieldsParams';
import { AtomicButton } from '../atomic/Button';
import { CardHistrix } from '../atomic/Card';
import { ItemHistrix } from '../atomic/Item';

interface props {
  labelFormat: [string, fieldsParmas][];
  valuesFormat?: paramsResponseGet[];
}

export const TableHistrix: FC<props> = ({
  labelFormat,
  valuesFormat,
}): JSX.Element => {
  //TODO: pasar por parametros la url hacer la peticion con los datos formatiarlos y pintarlo en la pantalla y done. :)
  if (!valuesFormat) {
    return (
      <Center>
        <CardHistrix>
          {labelFormat.map((value) => (
            <ItemHistrix key={value[1].name} title={value[1].title} />
          ))}
        </CardHistrix>
      </Center>
    );
  }
  return (
    <ScrollView
      _contentContainerStyle={{
        px: '20px',
        mb: '4',
      }}
    >
      <Center>
        {valuesFormat.map((value, index) => (
          <CardHistrix key={`card-${index}`}>
            {labelFormat.map((label) => (
              <ItemHistrix
                key={label[1].name}
                title={label[1].title}
                Value={setValueDependeny(value, label[1].name)}
              />
            ))}
          </CardHistrix>
        ))}
      </Center>
    </ScrollView>
  );
};

function setValueDependeny(
  value: paramsResponseGet,
  label: string,
): string | ReactElement {
  if (value[label].value) {
    if (value[label]._.includes('checkbox')) {
      return value[label].value === '0' ? 'No' : 'Si';
    }
    if (value[label]._.includes('button')) {
      return (
        <AtomicButton>
          {value[label].value.charAt(0).toUpperCase() +
            value[label].value.slice(1)}
        </AtomicButton>
      );
    }
  }
  if (value[label].text) return value[label].text;
  if (value[label]._) return value[label]._;
  return ' ';
}
