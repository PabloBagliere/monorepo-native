import {
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
  IFormControlLabelProps,
  IStackProps,
} from 'native-base';
import { UseFormRegister, Control, RegisterOptions } from 'react-hook-form';

import { T } from '.';

export interface formBasic {
  register?: UseFormRegister<T>;
  name?: string;
  control?: Control;
  rules?: RegisterOptions;
  label?: string;
  isDisabled?: boolean;
  styleLayout?: IStackProps;
  styleLabel?: IFormControlLabelProps;
  styleMessage?: IFormControlHelperTextProps;
  styleError?: IFormControlErrorMessageProps;
  message?: string;
}
