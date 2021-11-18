import {
  FormControl,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlProps,
} from 'native-base';
import React, { createContext, FC, useContext } from 'react';

import { T, schemaValidation } from '../../Interfaces';
import { dynamicContext } from '../../context';
interface histrixFormContextProps {
  name: string;
}

export const histrixFormContext = createContext({} as histrixFormContextProps);

interface validationExtends extends schemaValidation {
  typeBase: T;
}

export interface propsHistrixForm extends IFormControlProps {
  name: string;
  defaultValue: T;
  validation?: Array<validationExtends>;
  propsError?: IFormControlErrorMessageProps;
}
// let flat = false;
export const AddExternal: FC<propsHistrixForm> = ({
  name,
  children,
  // validation,
  propsError,
  ...props
}): JSX.Element => {
  // TODO: ver tema de la validacion automatica.
  // const { updateValidation } = useContext(dynamicContext);

  // if (validation && !flat) {
  //   updateValidation(validation, name);
  //   flat = true;
  // }
  const { errorComponent } = useContext(dynamicContext);

  return (
    <FormControl {...props}>
      <histrixFormContext.Provider value={{ name }}>
        {children}
      </histrixFormContext.Provider>
      <FormControl.ErrorMessage {...propsError}>
        {errorComponent[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export type propsLabel = IFormControlLabelProps;

export const LabelHistrixField: FC<propsLabel> = ({
  children,
  ...props
}): JSX.Element => {
  return <FormControl.Label {...props}>{children}</FormControl.Label>;
};
