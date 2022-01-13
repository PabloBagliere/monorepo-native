import { propsSecureDB, T } from 'components-app-histrix';

export const secureDB: propsSecureDB = {
  saveSecure: function (key: string, value: T): Promise<void> {
    const json = JSON.stringify(value);
    return Promise.resolve(localStorage.setItem(key, json));
  },
  getSecure: function (key: string): Promise<string> {
    const response = localStorage.getItem(key);
    if (response) {
      return Promise.resolve(JSON.parse(response));
    }
    return Promise.resolve(null);
  },
  deleteSecure: function (key: string): Promise<void> {
    return Promise.resolve(localStorage.removeItem(key));
  },
};
