import { DynamicFormHOC, props as DynamicFormProps } from './DynamicForm';
import { ButtonDynamicForm, props as ButtonProps } from './ButtonDynamicForm';
import {
  CheckboxHistrix,
  InputHistrix,
  MultipleSelectHistrix,
  SliderHistrix,
  SelectHistrix,
  RadioHistrix,
  SwitchHistrix,
  TextareaHistrix,
  propsSlider,
  propsCheckbox,
  propsSwith,
  propsTextarea,
  propsInput,
  propsMultipleSelect,
  propsRadio,
  propsSelect,
} from './FieldControles';
import {
  AddExternal,
  LabelHistrixField,
  propsHistrixForm,
  propsLabel,
} from './AddExternal';

interface DynamicFormHOCProps {
  (props: DynamicFormProps): JSX.Element;
  button: (props: ButtonProps) => JSX.Element;
  add: ExtendsFormHistrixHOC;
}
interface ExtendsFormHistrixHOC {
  (props: propsHistrixForm): JSX.Element;
  Label: (props: propsLabel) => JSX.Element;
  Input: (props: propsInput) => JSX.Element;
  Checkbox: (props: propsCheckbox) => JSX.Element;
  MultipleSelect: (props: propsMultipleSelect) => JSX.Element;
  Slider: (props: propsSlider) => JSX.Element;
  Select: (props: propsSelect) => JSX.Element;
  Radio: (props: propsRadio) => JSX.Element;
  Switch: (props: propsSwith) => JSX.Element;
  Textarea: (props: propsTextarea) => JSX.Element;
}

const prueba = Object.assign(AddExternal, {
  Label: LabelHistrixField,
  Input: InputHistrix,
  Checkbox: CheckboxHistrix,
  MultipleSelect: MultipleSelectHistrix,
  Slider: SliderHistrix,
  Select: SelectHistrix,
  Radio: RadioHistrix,
  Switch: SwitchHistrix,
  Textarea: TextareaHistrix,
});

export const DynamicForm: DynamicFormHOCProps = Object.assign(DynamicFormHOC, {
  button: ButtonDynamicForm,
  add: prueba,
});
