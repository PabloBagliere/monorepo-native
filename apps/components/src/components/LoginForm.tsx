import { FormControl, Input } from 'native-base';
import { FC } from 'react';

import { propsFormLogin } from '../Interfaces';

interface props {
  Inputs: Array<propsFormLogin>;
}

export const LoginForm: FC<props> = ({ Inputs }): JSX.Element => {
  return (
    <>
      {Inputs.map((value, index) => {
        return (
          <FormControl {...value.formProps} key={index}>
            <FormControl.Label {...value.labelProps}>
              {value.labelString}
            </FormControl.Label>
            <Input {...value.inputProps} />
            {value.helperMessaje ? (
              <FormControl.HelperText {...value.helperMessaje.props}>
                {value.helperMessaje.Messaje}
              </FormControl.HelperText>
            ) : null}
            {value.errorMessaje ? (
              <FormControl.ErrorMessage {...value.errorMessaje.props}>
                {value.errorMessaje.messaje}
              </FormControl.ErrorMessage>
            ) : null}
          </FormControl>
        );
      })}
    </>
  );
};
