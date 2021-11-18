import {
  IFormControlLabelProps,
  IFormControlProps,
  IFormControlErrorMessageProps,
  IInputProps,
  ISelectProps,
  ICheckboxGroupProps,
  IRadioGroupProps,
  ISliderProps,
  ISwitchProps,
} from 'native-base';
import { AndroidNativeProps } from '@react-native-community/datetimepicker';
import { ITextAreaProps } from 'native-base/lib/typescript/components/primitives/TextArea';

import { HelperMessageFormControler } from './HelperMessajes';

export interface propsForm {
  inputProps:
    | IInputProps
    | ISelectProps
    | ICheckboxGroupProps
    | IRadioGroupProps
    | ITextAreaProps
    | ISliderProps
    | ISwitchProps
    | AndroidNativeProps;
  labelProps: IFormControlLabelProps;
  labelString: string;
  formProps?: IFormControlProps;
  errorMessaje?: IFormControlErrorMessageProps;
  helperMessaje?: HelperMessageFormControler;
}
