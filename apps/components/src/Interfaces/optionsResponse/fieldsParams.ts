import { T } from '../anyT';

import { histrixType, typeSchema } from './histrixType';

export interface fieldsParmas {
  class: string;
  size: string | number;
  esClave?: string;
  required?: string;
  type: typeof typeSchema;
  align: string;
  dir: string;
  autocomplete: string;
  title: string;
  placeholder: string;
  disable?: string;
  readonly?: string;
  histrix_type: typeof histrixType;
  hidden: boolean;
  editable: boolean;
  sortable: boolean;
  column_style: string;
  hidden_column: boolean;
  name: string;
  isExpression: boolean;
  enabler: string;
  options: null | { [key: number]: string };
  path: string;
  isSelect: string | boolean;
  call_class: string;
  sum: null | string;
  help_key: string;
  detail: Array<null | undefined | T> | null;
  default_option_value: null | number | string;
  colspan: string;
  update_fields: Array<null | undefined | T> | null;
  computed_fields: null;
  computed_totals: string;
  innerContainer: boolean;
  step?: string;
  inputType?: string;
  'data-role'?: string;
  'data-options'?: null | { [key: string]: string };
}
