import {
  IFormControlLabelProps,
  IFormControlProps,
  IFormControlErrorMessageProps,
  IInputProps,
  ISelectProps,
} from 'native-base';

import { HelperMessageFormControler } from './HelperMessajes';

export interface propsForm {
  inputProps: IInputProps | ISelectProps;
  labelProps: IFormControlLabelProps;
  labelString: string;
  formProps?: IFormControlProps;
  errorMessaje?: IFormControlErrorMessageProps;
  helperMessaje?: HelperMessageFormControler;
}
