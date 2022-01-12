import * as SecureStore from 'expo-secure-store';

import { T } from '../../Interfaces/anyT';

export const secureDB = () => {
  const saveSecure: (key: string, value: T) => Promise<void> = async (
    key,
    value,
  ) => {
    const json = JSON.stringify(value);
    await SecureStore.setItemAsync(key, json);
  };

  const getSecure: (key: string) => Promise<string | null> = async (key) => {
    const response = await SecureStore.getItemAsync(key);
    if (response) {
      return JSON.parse(response);
    }
    return null;
  };

  const deleteSecure: (key: string) => Promise<void> = async (key) => {
    await SecureStore.deleteItemAsync(key);
  };

  return {
    saveSecure,
    getSecure,
    deleteSecure,
  };
};
