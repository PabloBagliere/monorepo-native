import {
  IFormControlLabelProps,
  IFormControlProps,
  IInputProps,
  IFormControlErrorMessageProps,
} from 'native-base';

import { HelperMessageFormControler } from './HelperMessajes';

export interface propsForm {
  inputProps: IInputProps;
  labelProps: IFormControlLabelProps;
  labelString: string;
  formProps?: IFormControlProps;
  errorMessaje?: IFormControlErrorMessageProps;
  helperMessaje?: HelperMessageFormControler;
}
