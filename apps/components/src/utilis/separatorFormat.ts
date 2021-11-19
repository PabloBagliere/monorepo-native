import { OptionalArraySchema } from 'yup/lib/array';
import { AnyObject } from 'yup/lib/types';
import * as Yup from 'yup';

import { dynamicForm, T, typeFormController } from '../Interfaces';

const defaultDataSeparator = (
  value: Array<dynamicForm>,
): { [key: string]: T } => {
  const dataSeparator = {};
  let hour: number, minut: number, seg: number;
  for (const input of value) {
    switch (input.type) {
      case typeFormController.DATEPICKER:
        dataSeparator[input.name] = new Date(`${input.value}`);
        continue;
      case typeFormController.TIMEPICKER:
        [hour, minut, seg] = input.value.split(':');
        dataSeparator[input.name] = new Date(2000, 11, 11, hour, minut, seg);
        continue;
      case typeFormController.SWITCH:
        if (typeof input.value === 'boolean') {
          dataSeparator[input.name] = input.value;
        } else {
          dataSeparator[input.name] = false;
        }
        continue;
      case typeFormController.SLIDER:
        if (typeof input.value === 'number') {
          dataSeparator[input.name] = input.value;
        } else {
          dataSeparator[input.name] = 0;
        }
        continue;
      default:
        dataSeparator[input.name] = input.value;
        continue;
    }
  }
  return dataSeparator;
};

const dataRequiredValidation = (value: Array<dynamicForm>) => {
  const requiredValidation: { [key: string]: T } = {};
  for (const input of value) {
    if (!input.validations) continue;
    let schema:
      | OptionalArraySchema<Yup.AnySchema, AnyObject, T[]>
      | Yup.DateSchema<Date, AnyObject, Date>
      | Yup.NumberSchema<number, AnyObject, number>
      | Yup.BooleanSchema<boolean, AnyObject, boolean>
      | Yup.StringSchema<string, AnyObject, string>;
    switch (input.type) {
      case typeFormController.CHECKBOX:
      case typeFormController.MULTISELECT:
        schema = Yup.array();
        break;
      case typeFormController.DATEPICKER:
      case typeFormController.TIMEPICKER:
        schema = Yup.date();
        break;
      case typeFormController.SLIDER:
        schema = Yup.number();
        break;
      case typeFormController.SWITCH:
        schema = Yup.boolean();
        break;
      default:
        schema = Yup.string();
    }

    for (const rule of input.validations) {
      if (rule.value) {
        if (input.type === typeFormController.DATEPICKER) {
          schema = schema[rule.type](new Date(rule.value), rule.message);
          continue;
        }
        if (input.type === typeFormController.TIMEPICKER) {
          const [hour, minut, seg] = rule.value.split(':');
          schema = schema[rule.type](
            new Date(2000, 11, 11, hour, minut, seg),
            rule.message,
          );
          continue;
        }
        schema = schema[rule.type](rule.value, rule.message);
      } else {
        schema = schema[rule.type](rule.message);
      }
    }
    requiredValidation[input.name] = schema;
  }
  return Yup.object({ ...requiredValidation });
};

export const separatorFormat = (inputData: dynamicForm[]) => {
  const data = defaultDataSeparator(inputData);
  const validation = dataRequiredValidation(inputData);

  return {
    data,
    validation,
  };
};
