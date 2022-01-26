import { useContext } from 'react';

import { secureDB } from '../config/varibleApi';
import Context from '../context/ContextUser';
import { Token } from '../Interfaces/api/Token';

export const useToken = () => {
  const { setToken } = useContext(Context);
  const saveToken = async (token: Token): Promise<boolean> => {
    const { saveSecure } = secureDB;
    const naw = new Date();
    naw.setSeconds(naw.getSeconds() + token.expires_in);
    try {
      await saveSecure('Token-access', token.access_token);
      await saveSecure('Token-refresh', token.refresh_token);
      await saveSecure('Token-expirate', String(naw.valueOf()));
      setToken(token.access_token);
      return true;
    } catch (error) {
      return false;
    }
  };
  const deleteToken = async () => {
    const { deleteSecure } = secureDB;
    try {
      await deleteSecure('Token-access');
      await deleteSecure('Token-refresh');
      await deleteSecure('Token-expirate');
      setToken(null);
      return true;
    } catch (error) {
      return false;
    }
  };
  return {
    saveToken,
    deleteToken,
  };
};
