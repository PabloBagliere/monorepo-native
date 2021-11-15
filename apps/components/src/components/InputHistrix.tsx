import { FormControl, IInputProps, ISelectProps } from 'native-base';
import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

import { dynamicForm, T, typeFormController } from '../Interfaces';

import { AtomicInput, AtomicSelect } from './atomic';

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
  const Component = ({ field }) => {
    switch (inputProp.type) {
      case typeFormController.INPUT:
        return (
          <AtomicInput
            {...(inputProp.propsForms.inputProps as IInputProps)}
            onChangeText={(val) => field.onChange(val)}
            {...field}
          />
        );
      case typeFormController.SELECT:
        return (
          <AtomicSelect
            {...(inputProp.propsForms.inputProps as ISelectProps)}
            selectedValue={field.value}
            onValueChange={(val: string) => {
              field.onChange(val);
            }}
            options={inputProp.options}
            ref={field.ref}
            {...field}
          />
        );
      default:
        break;
    }
  };

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
        render={({ field }) => {
          switch (inputProp.type) {
            case typeFormController.INPUT:
              return (
                <AtomicInput
                  {...(inputProp.propsForms.inputProps as IInputProps)}
                  onChangeText={(val) => field.onChange(val)}
                  {...field}
                />
              );
            case typeFormController.SELECT:
              return (
                <AtomicSelect
                  {...field}
                  {...(inputProp.propsForms.inputProps as ISelectProps)}
                  selectedValue={field.value}
                  onValueChange={(val: string) => {
                    field.onChange(val);
                  }}
                  options={inputProp.options}
                  refPersonal={field.ref}
                />
              );
            default:
              break;
          }
        }}
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
