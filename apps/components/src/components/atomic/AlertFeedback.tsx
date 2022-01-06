import {
  Alert,
  HStack,
  VStack,
  Text,
  IconButton,
  CloseIcon,
  IAlertProps,
} from 'native-base';
import React, { FC } from 'react';

interface props {
  status: IAlertProps['status'];
  message: string | null | undefined;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const AlertFeedback: FC<props> = ({
  status,
  message,
  setError,
}): JSX.Element => {
  const deleteMessage = () => {
    setError('');
  };

  return message ? (
    <Alert w="100%" status={status}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <Alert.Icon mt="1" />
            <Text>{message}</Text>
          </HStack>
          <IconButton
            variant="unstyled"
            icon={<CloseIcon size="3" color="coolGray.600" />}
            onPress={deleteMessage}
          />
        </HStack>
      </VStack>
    </Alert>
  ) : null;
};
