import { useState } from 'react';
import { OptionalArraySchema } from 'yup/lib/array';
import { AnyObject } from 'yup/lib/types';
import * as Yup from 'yup';

import {
  dynamicForm,
  schemaValidation,
  T,
  typeFormController,
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

interface valueUpdateValidation extends schemaValidation {
  typeBase: T;
}

let defaultValuesInit: { [key: string]: T };
let requiredField: { [key: string]: T };

const useFormValidation = (dataInputs?: Array<dynamicForm>) => {
  if (dataInputs) {
    defaultValuesInit = defaultDataSeparator(dataInputs);
    requiredField = dataRequiredValidation(dataInputs);
  }

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
  const updateStateValidation = (value: Array<valueUpdateValidation>) => {
    let a = {};
    for (const iterator of value) {
      const temp = Yup[iterator.typeBase]();
      if (iterator.value) {
        temp[iterator.type](iterator.value, iterator.message);
      } else {
        temp[iterator.type](iterator.message);
      }
      a = { ...a, ...temp };
    }
    const tempYup = Yup.object({ ...requiredField, ...a });
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
