import {
  FormControl,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlProps,
} from 'native-base';
import { createContext, FC, useContext } from 'react';

import { T, schemaValidation } from '../../../Interfaces';
import { dynamicContext } from '../../dynamic/DynamicForm';
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
}
// let flat = false;
export const FormHistrixFieldExtends: FC<propsHistrixForm> = ({
  name,
  children,
  // validation,
  ...props
}): JSX.Element => {
  // TODO: ver tema de la validacion automatica.
  // const { updateValidation } = useContext(dynamicContext);

  // if (validation && !flat) {
  //   updateValidation(validation, name);
  //   flat = true;
  // }

  return (
    <FormControl {...props}>
      <histrixFormContext.Provider value={{ name }}>
        {children}
      </histrixFormContext.Provider>
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

export type propsError = IFormControlErrorMessageProps;

export const ErrorMesajeHistrixField: FC<propsError> = ({
  children,
  ...props
}): JSX.Element => {
  const { errorComponent } = useContext(dynamicContext);
  const { name } = useContext(histrixFormContext);
  return (
    <FormControl.ErrorMessage {...props}>
      {children ? children : errorComponent[name]?.message}
    </FormControl.ErrorMessage>
  );
};
