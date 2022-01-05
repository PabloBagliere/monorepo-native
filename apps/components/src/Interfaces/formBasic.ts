import { IStackProps } from 'native-base';
import { UseFormRegister, Control, RegisterOptions } from 'react-hook-form';

import { T } from '.';

export interface formBasic {
  register?: UseFormRegister<T>;
  name?: string;
  control?: Control;
  rules?: RegisterOptions;
  styleLayout?: IStackProps;
}
