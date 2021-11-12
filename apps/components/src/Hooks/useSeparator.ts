import { useState } from 'react';
import * as Yup from 'yup';

import { T } from '../Interfaces';

const useSeparator = (inputs) => {
  const [defaultValues, setDefaultValues] = useState<{ [key: string]: T }>({});
  const [requiredField, setRequieredField] = useState<{ [key: string]: T }>({});
  for (const input of inputs) {
    setDefaultValues(([input.name] = input.value));

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
      if (rule.value) {
        schema = schema[rule.type](rule.value, rule.message);
      } else {
        schema = schema[rule.type](rule.message);
      }
    }
    // setRequieredField(([input.name] = schema as T));
  }
  return [defaultValues, requiredField];
};

export default useSeparator;
