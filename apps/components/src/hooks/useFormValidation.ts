import { useState } from 'react';
import { OptionalArraySchema } from 'yup/lib/array';
import { AnyObject } from 'yup/lib/types';
import * as Yup from 'yup';

import {
  dynamicForm,
  T,
  typeFormController,
  typeValidation,
} from '../Interfaces';

const defaultDataSeparator = (
  value: Array<dynamicForm>,
): { [key: string]: T } => {
  const dataSeparator = {};
  for (const input of value) {
    dataSeparator[input.name] = input.value;
  }
  return dataSeparator;
};

const dataRequiredValidation = (
  value: Array<dynamicForm>,
): { [key: string]: T } => {
  const requiredValidation: { [key: string]: T } = {};
  for (const input of value) {
    if (!input.validations) continue;
    let schema:
      | Yup.NumberSchema<number, AnyObject, number>
      | Yup.BooleanSchema<boolean, AnyObject, boolean>
      | Yup.StringSchema<string, AnyObject, string>
      | OptionalArraySchema<Yup.AnySchema, AnyObject, T[]>;
    switch (input.type) {
      case typeFormController.CHECKBOX:
      case typeFormController.MULTISELECT:
        schema = Yup.array();
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
        schema = schema[rule.type](rule.value, rule.message);
      } else {
        schema = schema[rule.type](rule.message);
      }
    }
    requiredValidation[input.name] = schema;
  }
  return requiredValidation;
};

const useFormValidation = (dataInputs?: Array<dynamicForm>) => {
  const defaultValuesInit: { [key: string]: T } =
    defaultDataSeparator(dataInputs);
  const requiredField: { [key: string]: T } =
    dataRequiredValidation(dataInputs);

  const validationSchemaInit = Yup.object({ ...requiredField });

  const [defaultValues, setDefaultValues] = useState(defaultValuesInit);
  const [validationSchema, setvalidationSchema] =
    useState(validationSchemaInit);

  const updateStateDefault = (value: { name: string; value: T }) => {
    setDefaultValues((prevState) => {
      const temp = {};
      temp[value.name] = value.value;
      return { ...prevState, ...temp };
    });
  };
  const updateStateValidation = (value: {
    typeBase: T;
    typeValidation: typeValidation;
    value?: T;
    message?: string;
  }) => {
    const temp = Yup[value.typeBase]();
    if (value.value) {
      temp[value.typeValidation](value.value, value.message);
    } else {
      temp[value.typeValidation](value.message);
    }
    const tempYup = Yup.object({ ...requiredField, ...temp });
    setvalidationSchema(tempYup);
  };

  return {
    defaultValues,
    validationSchema,
    updateStateDefault,
    updateStateValidation,
  };
};

export default useFormValidation;
