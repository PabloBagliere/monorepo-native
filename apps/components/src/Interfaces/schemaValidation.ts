import { T } from './anyT';
import { typeValidation } from './typeValidation';

export interface schemaValidation {
  type: typeof typeValidation;
  value?: T;
  message?: T;
}
