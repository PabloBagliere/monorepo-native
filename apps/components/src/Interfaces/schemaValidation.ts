import { T } from './anyT';
import { typeValidation } from './typeValidation';

export interface schemaValidation {
  type: typeValidation;
  value?: T;
  message?: T;
}
