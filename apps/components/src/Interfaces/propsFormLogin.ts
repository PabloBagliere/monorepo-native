import {
  IFormControlLabelProps,
  IFormControlProps,
  IInputProps,
} from 'native-base';

import { ErrorMessageFormControl, HelperMessageFormControler } from '.';

export interface propsFormLogin {
  inputProps: IInputProps;
  labelProps: IFormControlLabelProps;
  labelString: string;
  formProps?: IFormControlProps;
  errorMessaje?: ErrorMessageFormControl;
  helperMessaje?: HelperMessageFormControler;
}
