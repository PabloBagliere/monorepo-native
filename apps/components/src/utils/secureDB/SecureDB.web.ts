export const secureDB = () => {
  const saveSecure: ({ key: string, value: T }) => Promise<void> = ({
    key,
    value,
  }) => {
    const json = JSON.stringify(value);
    return Promise.resolve(localStorage.setItem(key, json));
  };
  const getSecure: ({ key: string }) => Promise<string | null> = ({ key }) => {
    const response = localStorage.getItem(key);
    if (response) {
      return Promise.resolve(JSON.parse(response));
    }
    return Promise.resolve(null);
  };
  const deleteSecure: ({ key: string }) => Promise<void> = ({ key }) => {
    return Promise.resolve(localStorage.removeItem(key));
  };

  return {
    saveSecure,
    getSecure,
    deleteSecure,
  };
};
