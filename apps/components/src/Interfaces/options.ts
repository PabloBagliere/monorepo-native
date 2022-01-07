import { ICheckboxProps, IRadioProps } from 'native-base';

import { T } from '.';

export interface Options {
  [key: number]: T;
  props?: ICheckboxProps | IRadioProps;
}
