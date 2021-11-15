import { DynamicFormHOC, props as DynamicFormProps } from './DynamicForm';
import { ButtonDynamicForm, props as ButtonProps } from './ButtonDynamicForm';

interface DynamicFormHOCProps {
  (props: DynamicFormProps): JSX.Element;
  button: (props: ButtonProps) => JSX.Element;
}

export const DynamicForm: DynamicFormHOCProps = Object.assign(DynamicFormHOC, {
  button: ButtonDynamicForm,
});
