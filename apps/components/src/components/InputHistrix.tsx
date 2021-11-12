import { FormControl, Input } from 'native-base';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

import { dynamicForm, T } from '../Interfaces';

interface Props {
  inputProp: dynamicForm;
  control: Control;
  error: T;
}

export const InputHistrix: FC<Props> = ({
  inputProp,
  control,
  error,
}): JSX.Element => {
  return (
    <FormControl
      {...inputProp.propsForms.formProps}
      isInvalid={inputProp.name in error}
    >
      <FormControl.Label {...inputProp.propsForms.labelProps}>
        {inputProp.propsForms.labelString}
      </FormControl.Label>
      <Controller
        control={control}
        name={inputProp.name}
        render={({ field }) => (
          <Input
            {...inputProp.propsForms.inputProps}
            onChangeText={(val) => field.onChange(val)}
            value={field.value}
            onBlur={field.onBlur}
          />
        )}
      />
      {inputProp.propsForms.helperMessaje ? (
        <FormControl.HelperText {...inputProp.propsForms.helperMessaje.props}>
          {inputProp.propsForms.helperMessaje.Messaje}
        </FormControl.HelperText>
      ) : null}
      <FormControl.ErrorMessage {...inputProp.propsForms.errorMessaje}>
        {error[inputProp.name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
