import {
  ICheckboxGroupProps,
  IInputProps,
  IRadioGroupProps,
  ISelectProps,
  ISliderProps,
  ISwitchProps,
} from 'native-base';
import { ITextAreaProps } from 'native-base/lib/typescript/components/primitives/TextArea';
import { FC, useContext } from 'react';
import { Controller } from 'react-hook-form';

import { Options } from '../../../Interfaces';
import {
  AtomicCheckbox,
  AtomicInput,
  AtomicSelect,
  AtomicRadio,
  AtomicSwitch,
  AtomicSlider,
  AtomicTextarea,
} from '../../atomic';
import { dynamicContext } from '../../dynamic/DynamicForm';
import { MultipleSelect } from '../MultipleSelect';

import { histrixFormContext } from './FormHistrixField';

export type propsInput = IInputProps;

export const InputHistrix: FC<propsInput> = ({ ...props }): JSX.Element => {
  const { controlComponent } = useContext(dynamicContext);
  const { name } = useContext(histrixFormContext);
  return (
    <Controller
      control={controlComponent}
      name={name}
      render={({ field }) => (
        <AtomicInput {...props} onChangeText={(val) => field.onChange(val)} />
      )}
    />
  );
};

export interface propsCheckbox extends ICheckboxGroupProps {
  options: Array<Options>;
}

export const CheckboxHistrix: FC<propsCheckbox> = ({
  options,
  ...props
}): JSX.Element => {
  const { controlComponent } = useContext(dynamicContext);
  const { name } = useContext(histrixFormContext);
  return (
    <Controller
      control={controlComponent}
      name={name}
      render={({ field }) => (
        <AtomicCheckbox
          onChange={(val) => field.onChange(val)}
          options={options}
          {...props}
        />
      )}
    />
  );
};

export interface propsSelect extends ISelectProps {
  options: Array<Options>;
}

export const SelectHistrix: FC<propsSelect> = ({
  options,
  ...props
}): JSX.Element => {
  const { controlComponent } = useContext(dynamicContext);
  const { name } = useContext(histrixFormContext);
  return (
    <Controller
      control={controlComponent}
      name={name}
      render={({ field }) => (
        <AtomicSelect
          {...props}
          selectedValue={field.value}
          onValueChange={(val) => field.onChange(val)}
          options={options}
        />
      )}
    />
  );
};

export interface propsRadio extends IRadioGroupProps {
  options: Array<Options>;
}

export const RadioHistrix: FC<propsRadio> = ({
  options,
  ...props
}): JSX.Element => {
  const { controlComponent } = useContext(dynamicContext);
  const { name } = useContext(histrixFormContext);
  return (
    <Controller
      control={controlComponent}
      name={name}
      render={({ field }) => (
        <AtomicRadio
          options={options}
          onChange={(val) => field.onChange(val)}
          {...props}
        />
      )}
    />
  );
};

export interface propsMultipleSelect extends ICheckboxGroupProps {
  options: Array<Options>;
  label: string;
}

export const MultipleSelectHistrix: FC<propsMultipleSelect> = ({
  options,
  label,
  ...props
}): JSX.Element => {
  const { controlComponent } = useContext(dynamicContext);
  const { name } = useContext(histrixFormContext);
  return (
    <Controller
      control={controlComponent}
      name={name}
      render={({ field }) => (
        <MultipleSelect
          label={label}
          onChange={(val) => field.onChange(val)}
          options={options}
          {...props}
        />
      )}
    />
  );
};

export type propsSwith = ISwitchProps;

export const SwitchHistrix: FC<propsSwith> = ({ ...props }): JSX.Element => {
  const { controlComponent } = useContext(dynamicContext);
  const { name } = useContext(histrixFormContext);
  return (
    <Controller
      control={controlComponent}
      name={name}
      render={({ field }) => (
        <AtomicSwitch
          onToggle={() => field.onChange(!field.value)}
          isChecked={field.value}
          {...props}
        />
      )}
    />
  );
};

export type propsSlider = ISliderProps;

export const SliderHistrix: FC<propsSlider> = ({ ...props }): JSX.Element => {
  const { controlComponent } = useContext(dynamicContext);
  const { name } = useContext(histrixFormContext);
  return (
    <Controller
      control={controlComponent}
      name={name}
      render={({ field }) => (
        <AtomicSlider
          onChange={(val) => field.onChange(val)}
          defaultValue={field.value}
          {...props}
        />
      )}
    />
  );
};

export type propsTextarea = ITextAreaProps;

export const TextareaHistrix: FC<propsTextarea> = ({
  ...props
}): JSX.Element => {
  const { controlComponent } = useContext(dynamicContext);
  const { name } = useContext(histrixFormContext);
  return (
    <Controller
      control={controlComponent}
      name={name}
      render={({ field }) => (
        <AtomicTextarea
          onChangeText={(val) => field.onChange(val)}
          {...props}
        />
      )}
    />
  );
};
