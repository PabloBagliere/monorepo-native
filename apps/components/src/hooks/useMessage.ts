import { toast } from 'react-hot-toast/dist/core/toast';
import {
  Renderable,
  ToastOptions,
  DefaultToastOptions,
} from 'react-hot-toast/dist/core/types';

import { T } from '../Interfaces/anyT';

interface optionsMenssage {
  message: Renderable;
  options?: ToastOptions;
}

interface optionsMessagePromise {
  promise: Promise<T>;
  messages: {
    loading: Renderable;
    success: Renderable;
    error: Renderable;
  };
  options: DefaultToastOptions;
}

export const useMessage = () => {
  const MessageSuccess: (props: optionsMenssage) => string = ({
    message,
    options,
  }) => {
    return toast.success(message, options);
  };

  const MessageError: (props: optionsMenssage) => string = ({
    message,
    options,
  }) => {
    return toast.error(message, options);
  };

  const MessageCustom: (props: optionsMenssage) => string = ({
    message,
    options,
  }) => {
    return toast.custom(message, options);
  };

  const MessagePromise: (props: optionsMessagePromise) => Promise<T> = ({
    promise,
    messages,
    options,
  }) => {
    return toast.promise(promise, messages, options);
  };

  const MessageDismiss = (id?: string) => {
    toast.dismiss(id);
  };

  return {
    MessageCustom,
    MessageDismiss,
    MessageSuccess,
    MessagePromise,
    MessageError,
  };
};
