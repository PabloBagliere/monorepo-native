import React, { FC, useEffect, useRef, useState } from 'react';
import { HStack, Icon, IconButton } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { paramsResponseGet } from '../../Interfaces/api/getRespose/paramsResponseGet';
import { ItemHistrix } from '../atomic/Item';

import { AlertConfirmHistrix } from './AlertConfirm';

interface props {
  info: paramsResponseGet;
  isDelete: boolean;
  isUpdate: boolean;
}

export const ActionesInformaation: FC<props> = ({
  info,
  isDelete,
  isUpdate,
}): JSX.Element => {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [infoKey, setInfoKey] = useState<Array<string>>([]);
  useEffect(() => {
    setInfoKey(
      Object.keys(info).filter((value) => {
        if (value.includes('nombre') || value.includes('nro') || value === 'id')
          return true;
      }),
    );
  }, [info]);
  const clickAlert = () => {
    console.log('delete');
    setIsOpenAlert(false);
  };
  const cancelRef = useRef(null);
  return (
    <HStack
      justifyContent="flex-end"
      // TODO: Ver porque no lo pone uno en cada punta.
      // justifyContent="space-between"
      alignItems="center"
    >
      {isDelete ? (
        <IconButton
          icon={
            <Icon as={MaterialIcons} name="delete-forever" color="red.600" />
          }
          borderRadius="full"
          _icon={{
            size: 'md',
          }}
          onPress={() => setIsOpenAlert(true)}
        />
      ) : null}
      {isUpdate ? (
        <IconButton
          icon={<Icon as={MaterialIcons} name="mode-edit" color="green.600" />}
          borderRadius="full"
          _icon={{
            size: 'md',
          }}
          size="md"
          m="0"
          onPress={() => console.log('update')}
        />
      ) : null}
      <AlertConfirmHistrix
        action={clickAlert}
        isOpen={isOpenAlert}
        close={setIsOpenAlert}
        reference={cancelRef}
      >
        Para validar este es lo que estas por eliminar por completo.
        {infoKey.map((value, index) => (
          <ItemHistrix
            key={index}
            Value={info[value]._}
            title={value.replace(/_/g, ' ')}
          />
        ))}
      </AlertConfirmHistrix>
    </HStack>
  );
};
