import { propsSecureDB } from 'components-app-histrix';
import * as SecureStore from 'expo-secure-store';

export const providerSecure: propsSecureDB = {
  saveSecure: async (key, value) => {
    const json = JSON.stringify(value);
    await SecureStore.setItemAsync(key, json);
  },

  getSecure: async (key) => {
    const response = await SecureStore.getItemAsync(key);
    if (response) {
      return JSON.parse(response);
    }
    return null;
  },

  deleteSecure: async (key) => {
    await SecureStore.deleteItemAsync(key);
  },
};
