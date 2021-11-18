import { createContext } from 'react';
import { Control, UseFormHandleSubmit } from 'react-hook-form';

import { T } from '../Interfaces';

interface dynamicContextProps {
  handleSubmit: UseFormHandleSubmit<{ [key: string]: T }>;
  controlComponent: Control;
  errorComponent: { [x: number]: T; [x: string]: T };
  updateValidation: T;
}

export const dynamicContext = createContext({} as dynamicContextProps);
