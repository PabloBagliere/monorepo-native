import { ICheckboxProps, IRadioProps } from 'native-base';

export interface Options {
  id: number;
  label?: string;
  value?: string;
  props?: ICheckboxProps | IRadioProps;
}
