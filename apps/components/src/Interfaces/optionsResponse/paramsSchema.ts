import { T } from '../anyT';

import { fieldsParmas } from './fieldsParams';
import { typeConsulta } from './typeConsulta';
import { valuesParmas } from './valuesParams';

export interface paramsSchema {
  title: string;
  type: typeConsulta;
  observation: string;
  can_insert: boolean;
  print: boolean;
  can_update: boolean;
  can_delete: boolean;
  can_process: boolean;
  process_next_step: boolean;
  readonly: boolean;
  path: string;
  instance: string;
  fieldValidations: Array<null | undefined | T> | null;
  formValidations: Array<null | undefined | T> | null;
  header: boolean;
  filters: Array<null | undefined | T> | null;
  charts: Array<null | undefined | T> | null;
  insertButton: boolean;
  updateButton: boolean;
  defaultView: null | T;
  export: boolean;
  processButton: string;
  preFetch: boolean;
  pdf: boolean;
  detail: boolean;
  inline_detail: boolean;
  conditions: Array<null | undefined | T> | null;
  number_of_fields: number;
  fields: { [key: string]: fieldsParmas };
  values: { [key: string]: valuesParmas };
}
