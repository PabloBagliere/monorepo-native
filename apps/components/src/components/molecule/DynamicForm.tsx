// TODO: Ver tema de los estilos para celular y web.

import React, { FC, useMemo } from 'react';
import { Box, ScrollView } from 'native-base';

import {
  AtomicSelect,
  AtomicInput,
  AtomicTextarea,
  AtomicSwitch,
} from '../atomic';
import { AtomicDatapicker } from '../DataPicker';
import { AtomicTimepicker } from '../TimePicker';
import { paramsObtions, fieldsParmas } from '../../Interfaces';

interface props {
  dynamic: string;
}

const format = (content: string): [string, fieldsParmas][] => {
  const fileJson: paramsObtions = JSON.parse(content);
  const fields = fileJson.schema.fields;
  const hidden = {};
  for (const key in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, key)) {
      if (fields[key].hidden !== true) {
        hidden[key] = fields[key];
      }
    }
  }
  return Object.entries(hidden);
};

const DynamicFormComponet: FC<props> = ({ dynamic }): JSX.Element => {
  const memo: [string, fieldsParmas][] = useMemo(
    () => format(dynamic),
    [dynamic],
  );
  return (
    <ScrollView>
      <Box
        _web={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignContent: 'center',
        }}
      >
        {memo.map((e) => {
          if (e[1].options) {
            return (
              <AtomicSelect
                options={e[1].options}
                placeholder={e[1].placeholder}
                label={e[1].title}
                name={e[1].name}
                key={e[1].name}
                isDisabled={e[1].disabled ? true : false}
              />
            );
          }
          switch (e[1].histrix_type) {
            case 'Integer':
              return (
                <AtomicInput
                  type={e[1].type}
                  placeholder={e[1].placeholder}
                  label={e[1].title}
                  name={e[1].name}
                  key={e[1].name}
                  isDisabled={e[1].disabled ? true : false}
                  rules={{
                    maxLength: {
                      value: Number.isInteger(e[1].size)
                        ? (e[1].size as number)
                        : (parseInt(e[1].size as string) as number),
                      message: `No puede ser mayor de ${e[1].size} caracteres`,
                    },
                  }}
                />
              );
            case 'Field':
              return (
                <AtomicInput
                  type={e[1].type}
                  placeholder={e[1].placeholder}
                  label={e[1].title}
                  name={e[1].name}
                  key={e[1].name}
                  isDisabled={e[1].disabled ? true : false}
                  rules={{
                    maxLength: {
                      value: Number.isInteger(e[1].size)
                        ? (e[1].size as number)
                        : (parseInt(e[1].size as string) as number),
                      message: `No puede ser mayor de ${e[1].size} caracteres`,
                    },
                  }}
                />
              );
            case 'Date':
              return (
                <AtomicDatapicker
                  isDisabled={e[1].disabled ? true : false}
                  name={e[1].name}
                  label={e[1].title}
                  key={e[1].name}
                />
              );
            case 'Tinyint':
              return (
                <AtomicInput
                  type={e[1].type}
                  placeholder={e[1].placeholder}
                  label={e[1].title}
                  name={e[1].name}
                  key={e[1].name}
                  isDisabled={e[1].disabled ? true : false}
                  rules={{
                    maxLength: {
                      value: Number.isInteger(e[1].size)
                        ? (e[1].size as number)
                        : (parseInt(e[1].size as string) as number),
                      message: `No puede ser mayor de ${e[1].size} caracteres`,
                    },
                  }}
                />
              );
            case 'Time':
              return (
                <AtomicTimepicker
                  name={e[1].name}
                  label={e[1].title}
                  key={e[1].name}
                />
              );
            case 'Varchar':
              return (
                <AtomicInput
                  type={e[1].type}
                  placeholder={e[1].placeholder}
                  label={e[1].title}
                  name={e[1].name}
                  key={e[1].name}
                  isDisabled={e[1].disabled ? true : false}
                  rules={{
                    maxLength: {
                      value: Number.isInteger(e[1].size)
                        ? (e[1].size as number)
                        : (parseInt(e[1].size as string) as number),
                      message: `No puede ser mayor de ${e[1].size} caracteres`,
                    },
                  }}
                />
              );
            case 'HtmlField':
              return (
                <AtomicTextarea
                  name={e[1].name}
                  label={e[1].title}
                  placeholder={e[1].placeholder}
                  isDisabled={e[1].disabled ? true : false}
                  key={e[1].name}
                  rules={{
                    maxLength: {
                      value: Number.isInteger(e[1].size)
                        ? (e[1].size as number)
                        : (parseInt(e[1].size as string) as number),
                      message: `No puede ser mayor de ${e[1].size} caracteres`,
                    },
                  }}
                />
              );
            case 'Check':
              return (
                <AtomicSwitch
                  name={e[1].name}
                  label={e[1].title}
                  key={e[1].name}
                  message={e[1].placeholder}
                  isDisabled={e[1].disabled ? true : false}
                />
              );
            case 'Text':
              return (
                <AtomicInput
                  type={e[1].type}
                  placeholder={e[1].placeholder}
                  label={e[1].title}
                  name={e[1].name}
                  key={e[1].name}
                  isDisabled={e[1].disabled ? true : false}
                  rules={{
                    maxLength: {
                      value: Number.isInteger(e[1].size)
                        ? (e[1].size as number)
                        : (parseInt(e[1].size as string) as number),
                      message: `No puede ser mayor de ${e[1].size} caracteres`,
                    },
                  }}
                />
              );
            default:
              break;
          }
        })}
      </Box>
    </ScrollView>
  );
};

export const DynamicForm = React.memo(DynamicFormComponet);
