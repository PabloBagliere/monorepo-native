import React, { FC, useMemo } from 'react';
import { UseFormRegister, Control } from 'react-hook-form';
import { ScrollView } from 'native-base';

import {
  AtomicSelect,
  AtomicInput,
  AtomicTextarea,
  AtomicSwitch,
} from '../atomic';
import { AtomicDatapicker } from '../DataPicker';
import { AtomicTimepicker } from '../TimePicker';
import { paramsObtions, fieldsParmas, T } from '../../Interfaces';

interface props {
  dynamic: string;
  register: UseFormRegister<T>;
  control: Control;
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

const DynamicFormComponet: FC<props> = ({
  dynamic,
  register,
  control,
}): JSX.Element => {
  const memo: [string, fieldsParmas][] = useMemo(
    () => format(dynamic),
    [dynamic],
  );
  return (
    <ScrollView>
      {memo.map((e) => {
        if (e[1].options) {
          return (
            <AtomicSelect
              register={register}
              control={control}
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
                register={register}
                control={control}
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
                register={register}
                control={control}
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
                register={register}
                control={control}
                isDisabled={e[1].disabled ? true : false}
                name={e[1].name}
                label={e[1].title}
                key={e[1].name}
              />
            );
          case 'Tinyint':
            return (
              <AtomicInput
                register={register}
                control={control}
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
                register={register}
                control={control}
                name={e[1].name}
                label={e[1].title}
                key={e[1].name}
              />
            );
          case 'Varchar':
            return (
              <AtomicInput
                register={register}
                control={control}
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
                register={register}
                control={control}
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
                register={register}
                control={control}
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
                register={register}
                control={control}
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
    </ScrollView>
  );
};

export const DynamicForm = React.memo(DynamicFormComponet);
