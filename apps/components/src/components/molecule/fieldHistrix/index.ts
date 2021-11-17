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
  ErrorMesajeHistrixField,
  FormHistrixFieldExtends,
  LabelHistrixField,
  propsError,
  propsHistrixForm,
  propsLabel,
} from './FormHistrixField';

export * from './FieldHistrix';

interface ExtendsFormHistrixHOC {
  (props: propsHistrixForm): JSX.Element;
  MessageError: (props: propsError) => JSX.Element;
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

export const ExtendsForm: ExtendsFormHistrixHOC = Object.assign(
  FormHistrixFieldExtends,
  {
    MessageError: ErrorMesajeHistrixField,
    Label: LabelHistrixField,
    Input: InputHistrix,
    Checkbox: CheckboxHistrix,
    MultipleSelect: MultipleSelectHistrix,
    Slider: SliderHistrix,
    Select: SelectHistrix,
    Radio: RadioHistrix,
    Switch: SwitchHistrix,
    Textarea: TextareaHistrix,
  },
);
