import { EventType } from 'react-hook-form/dist/types';

import { T } from './anyT';

export interface reponseWatch {
  nameUpdate: string;
  valueUpdate: T;
  typeUpdate: EventType;
  valueComplet: { [x: string]: T };
}
