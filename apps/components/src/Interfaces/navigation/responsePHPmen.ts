import { nodosNavigation } from './nodosNavigation';
import { parameters } from './parameters';

export interface responsePHPmen {
  description: string;
  parameters: parameters;
  tree: Array<nodosNavigation>;
}
