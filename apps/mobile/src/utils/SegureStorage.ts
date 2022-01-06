import * as SecureStore from 'expo-secure-store';
import { SecureStoreOptions } from 'expo-secure-store';

export const saveSecure: (
  key: string,
  value: string,
  options?: SecureStoreOptions | undefined,
) => Promise<void> = async (key, value, options) => {
  await SecureStore.setItemAsync(key, value, options);
};

export const getSecure: (
  key: string,
  options?: SecureStoreOptions | undefined,
) => Promise<string | null> = async (key, options) => {
  return await SecureStore.getItemAsync(key, options);
};

export const deleteSecure: (
  key: string,
  options?: SecureStoreOptions | undefined,
) => Promise<void> = async (key, options) => {
  await SecureStore.deleteItemAsync(key, options);
};
