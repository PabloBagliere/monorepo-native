import {
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
  IFormControlLabelProps,
  IStackProps,
} from 'native-base';
import { RegisterOptions } from 'react-hook-form';

export interface formBasic {
  name?: string;
  rules?: RegisterOptions;
  label?: string;
  isDisabled?: boolean;
  styleLayout?: IStackProps;
  styleLabel?: IFormControlLabelProps;
  styleMessage?: IFormControlHelperTextProps;
  styleError?: IFormControlErrorMessageProps;
  message?: string;
}
