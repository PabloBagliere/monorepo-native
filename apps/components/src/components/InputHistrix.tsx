import {
  FormControl,
  ICheckboxGroupProps,
  IInputProps,
  ISelectProps,
  WarningOutlineIcon,
  IRadioGroupProps,
  ISliderProps,
  ISwitchProps,
} from 'native-base';
import { ITextAreaProps } from 'native-base/lib/typescript/components/primitives/TextArea';
import React, { FC } from 'react';
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';

import { dynamicForm, T, typeFormController } from '../Interfaces';

import {
  AtomicInput,
  AtomicSelect,
  AtomicCheckbox,
  AtomicRadio,
  AtomicSlider,
  AtomicTextarea,
  AtomicSwitch,
} from './atomic';

interface Props {
  inputProp: dynamicForm;
  control: Control;
  error: T;
}
const FuntionSelectComponentDynamic = (
  { onChange, value }: ControllerRenderProps<FieldValues, string>,
  inputProp,
) => {
  switch (inputProp.type) {
    case typeFormController.INPUT:
      return (
        <AtomicInput
          {...(inputProp.propsForms.inputProps as IInputProps)}
          onChangeText={(val) => onChange(val)}
        />
      );
    case typeFormController.SELECT:
      return (
        <AtomicSelect
          {...(inputProp.propsForms.inputProps as ISelectProps)}
          selectedValue={value}
          onValueChange={(val) => onChange(val)}
          options={inputProp.options}
        />
      );
    case typeFormController.CHECKBOX:
      return (
        <AtomicCheckbox
          onChange={(val) => onChange(val)}
          options={inputProp.options}
          {...(inputProp.propsForms.inputProps as ICheckboxGroupProps)}
        />
      );
    case typeFormController.RADIO:
      return (
        <AtomicRadio
          options={inputProp.options}
          onChange={(val) => onChange(val)}
          {...(inputProp.propsForms.inputProps as IRadioGroupProps)}
        />
      );
    case typeFormController.SLIDER:
      return (
        <AtomicSlider
          onChange={(val) => onChange(val)}
          defaultValue={value}
          {...(inputProp.propsForms.inputProps as ISliderProps)}
        />
      );
    case typeFormController.TEXTAREA:
      return (
        <AtomicTextarea
          onChangeText={(val) => onChange(val)}
          {...(inputProp.propsForms.inputProps as ITextAreaProps)}
        />
      );
    case typeFormController.SWITCH:
      return (
        <AtomicSwitch
          onToggle={() => onChange(!value)}
          isChecked={value}
          {...(inputProp.propsForms.inputProps as ISwitchProps)}
        />
      );
    default:
      break;
  }
};

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
        render={({ field }) => FuntionSelectComponentDynamic(field, inputProp)}
      />
      {inputProp.propsForms.helperMessaje ? (
        <FormControl.HelperText {...inputProp.propsForms.helperMessaje.props}>
          {inputProp.propsForms.helperMessaje.Messaje}
        </FormControl.HelperText>
      ) : null}
      <FormControl.ErrorMessage
        leftIcon={<WarningOutlineIcon size="xs" />}
        {...inputProp.propsForms.errorMessaje}
      >
        {error[inputProp.name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
