import { T } from './anyT';
import { Options } from './options';
import { propsForm } from './propsForm';
import { schemaValidation } from './schemaValidation';
import { typeFormController } from './typeFormController';

export interface dynamicForm {
  type: typeFormController;
  name: string;
  value: T;
  propsForms: propsForm;
  validations?: Array<schemaValidation>;
  options?: Array<Options>;
}
