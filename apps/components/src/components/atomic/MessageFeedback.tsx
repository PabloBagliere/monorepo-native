import React, { FC, useRef } from 'react';
import { Toast as ToastProps } from 'react-hot-toast/dist/core/types';
import { useToaster } from 'react-hot-toast/dist/core/use-toaster';
import { Animated, Text, View } from 'react-native';

interface props {
  toast: ToastProps;
  updateHeight: (toastId: string, height: number) => void;
  offset: number;
}

const Toast: FC<props> = ({ toast, updateHeight, offset }): JSX.Element => {
  const fadeAnim = useRef(new Animated.Value(0.5)).current; // Initial value for opacity: 0
  const posAnim = useRef(new Animated.Value(-80)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: toast.visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, toast.visible]);

  React.useEffect(() => {
    Animated.spring(posAnim, {
      toValue: toast.visible ? offset : -80,
      useNativeDriver: true,
    }).start();
  }, [posAnim, offset, toast.visible]);

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 9999,
        alignItems: 'center',
        opacity: fadeAnim,
        transform: [
          {
            translateY: posAnim,
          },
        ],
      }}
    >
      <View
        onLayout={(event) =>
          updateHeight(toast.id, event.nativeEvent.layout.height)
        }
        style={{
          marginTop: 50,
          backgroundColor: toast.type === 'success' ? '#4caf50' : '#f44336',
          maxWidth: '80%',
          borderRadius: 30,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}
        key={toast.id}
      >
        <Text>{toast.icon}</Text>
        <Text
          style={{
            color: '#fff',
            padding: 4,
            flex: 1,
            textAlign: 'center',
          }}
        >
          {toast.message}
        </Text>
      </View>
    </Animated.View>
  );
};

export const Message: FC = (): JSX.Element => {
  const { toasts, handlers } = useToaster();

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          updateHeight={handlers.updateHeight}
          offset={handlers.calculateOffset(toast, {
            reverseOrder: false,
          })}
        />
      ))}
    </View>
  );
};
