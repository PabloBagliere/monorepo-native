import { useToast } from 'react-native-toast-notifications';
import { ToastOptions } from 'react-native-toast-notifications/lib/typescript/toast';

interface props {
  idToast?: string;
  message: string | JSX.Element;
  options?: ToastOptions;
}

export const useMessage = () => {
  const toast = useToast();

  const configGlobal: ToastOptions = {
    duration: 4000,
    onPress: (id) => {
      toast.hide(id);
    },
  };
  const toastWarning: (props: props) => string | void = ({
    idToast,
    message,
    options,
  }) => {
    return !idToast
      ? toast.show(message, {
          type: 'warning',
          ...configGlobal,
          ...options,
        })
      : toast.update(idToast, message, {
          type: 'warning',
          ...configGlobal,
          ...options,
        });
  };

  const toastNormal: (props: props) => string | void = ({
    idToast,
    message,
    options,
  }) => {
    return !idToast
      ? toast.show(message, {
          type: 'normal',
          ...configGlobal,
          ...options,
        })
      : toast.update(idToast, message, {
          type: 'normal',
          ...configGlobal,
          ...options,
        });
  };

  const toastSuccess: (props: props) => string | void = ({
    idToast,
    message,
    options,
  }) => {
    return !idToast
      ? toast.show(message, {
          type: 'success',
          ...configGlobal,
          ...options,
        })
      : toast.update(idToast, message, {
          type: 'success',
          ...configGlobal,
          ...options,
        });
  };

  const toastDenger: (props: props) => string | void = ({
    idToast,
    message,
    options,
  }) => {
    return !idToast
      ? toast.show(message, {
          type: 'denger',
          ...configGlobal,
          ...options,
        })
      : toast.update(idToast, message, {
          type: 'denger',
          ...configGlobal,
          ...options,
        });
  };

  return {
    toast,
    toastWarning,
    toastNormal,
    toastSuccess,
    toastDenger,
  };
};
