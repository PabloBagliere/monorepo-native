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
import React, { FC, useContext } from 'react';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';

import { dynamicForm, typeFormController } from '../../Interfaces';
import {
  AtomicInput,
  AtomicSelect,
  AtomicCheckbox,
  AtomicRadio,
  AtomicSlider,
  AtomicTextarea,
  AtomicSwitch,
  AtomicDatapicker,
} from '../atomic';
import { dynamicContext } from '../../context';

import { MultipleSelect } from './MultipleSelect';

const FuntionSelectComponentDynamic = (
  { onChange, value }: ControllerRenderProps<FieldValues, string>,
  inputProp: dynamicForm,
) => {
  switch (inputProp.type) {
    case typeFormController.INPUT:
      return (
        <AtomicInput
          defaultValue={value}
          {...(inputProp.propsForms.inputProps as IInputProps)}
          onChangeText={(val) => onChange(val)}
        />
      );
    case typeFormController.SELECT:
      return (
        <AtomicSelect
          {...(inputProp.propsForms.inputProps as ISelectProps)}
          selectedValue={value}
          defaultValue={value}
          onValueChange={(val) => onChange(val)}
          options={inputProp.options}
        />
      );
    case typeFormController.MULTISELECT:
      return (
        <MultipleSelect
          label={inputProp.propsForms.labelString}
          onChange={(val) => onChange(val)}
          defaultValue={inputProp.value as Array<string>}
          options={inputProp.options}
          {...(inputProp.propsForms.inputProps as ICheckboxGroupProps)}
        />
      );
    case typeFormController.CHECKBOX:
      return (
        <AtomicCheckbox
          onChange={(val) => onChange(val)}
          defaultValue={value}
          options={inputProp.options}
          {...(inputProp.propsForms.inputProps as ICheckboxGroupProps)}
        />
      );
    case typeFormController.RADIO:
      return (
        <AtomicRadio
          options={inputProp.options}
          defaultValue={value}
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
          defaultValue={value}
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
    case typeFormController.DATEPICKER:
      return (
        <AtomicDatapicker
          setNewDate={onChange}
          display="default"
          label={inputProp.propsForms.labelString}
          mode="date"
          value={value}
        />
      );
    case typeFormController.TIMEPICKER:
      return (
        <AtomicDatapicker
          display="default"
          setNewDate={onChange}
          label={inputProp.propsForms.labelString}
          mode="time"
          value={value}
        />
      );
    default:
      break;
  }
};

interface Props {
  inputProp: dynamicForm;
}

export const FieldHistrix: FC<Props> = ({ inputProp }): JSX.Element => {
  const { errorComponent, controlComponent } = useContext(dynamicContext);
  return (
    <FormControl
      {...inputProp.propsForms.formProps}
      isInvalid={inputProp.name in errorComponent}
    >
      {inputProp.type === typeFormController.MULTISELECT ||
      inputProp.type === typeFormController.DATEPICKER ||
      inputProp.type === typeFormController.TIMEPICKER ? null : (
        <FormControl.Label {...inputProp.propsForms.labelProps}>
          {inputProp.propsForms.labelString}
        </FormControl.Label>
      )}
      <Controller
        control={controlComponent}
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
        {errorComponent[inputProp.name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
