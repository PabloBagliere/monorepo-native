import { Center, ScrollView } from 'native-base';
import React, { FC, ReactElement, useState } from 'react';

import { ModalHistrix } from '..';
import { paramsResponseGet } from '../../Interfaces/api/getRespose/paramsResponseGet';
import { fieldsParmas } from '../../Interfaces/optionsResponse/fieldsParams';
import { HistrixPages } from '../../Pages/HistrixPages';
import { AtomicButton } from '../atomic/Button';
import { CardHistrix } from '../atomic/Card';
import { ItemHistrix } from '../atomic/Item';

interface props {
  labelFormat: [string, fieldsParmas][];
  valuesFormat?: paramsResponseGet[];
  paramsParent: { [key: string]: string };
}

interface propsHandle {
  url: string;
  params: { [key: string]: string };
}

export const TableHistrix: FC<props> = ({
  labelFormat,
  valuesFormat,
  paramsParent,
}): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [params, setParmas] = useState<{ [key: string]: string }>();
  const handleClick: (props: propsHandle) => void = ({ params, url }) => {
    const paremsAssign = Object.assign(paramsParent, params);
    setParmas(paremsAssign);
    setQuery(url);
    setModalVisible(true);
  };

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
    <>
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
                  Value={setValueDependeny({
                    label: label[1].name,
                    value,
                    cb: handleClick,
                  })}
                />
              ))}
            </CardHistrix>
          ))}
        </Center>
      </ScrollView>
      <ModalHistrix
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <HistrixPages query={'app' + query} params={params} />
      </ModalHistrix>
    </>
  );
};

interface propsValueDependey {
  value: paramsResponseGet;
  label: string;
  cb: (props: propsHandle) => void;
}

function setValueDependeny({
  cb,
  label,
  value,
}: propsValueDependey): string | ReactElement {
  if (value[label].value) {
    if (value[label]._.includes('checkbox')) {
      return value[label].value === '0' ? 'No' : 'Si';
    }
    if (value[label]._.includes('button')) {
      return (
        <AtomicButton
          onPress={() => {
            const params = {};
            value[label].linkParameters.split('&').forEach((value) => {
              const temp = value.split('=');
              if (!temp[0]) return;
              params[temp[0]] = temp[1];
            });
            cb({ url: value[label].link.dir + value[label].link.file, params });
          }}
        >
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
