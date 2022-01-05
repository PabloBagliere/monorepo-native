import { createContext } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

import { T } from '../Interfaces';

interface ContextFormProps {
  handleSubmit: UseFormHandleSubmit<{ [key: string]: T }> | null;
  errorComponent: { [x: number]: T; [x: string]: T } | null;
}

export const ContextForm = createContext({
  handleSubmit: null,
  errorComponent: null,
} as ContextFormProps);
