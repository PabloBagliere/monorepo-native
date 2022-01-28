// TODO: manejo de error
import { useCallback } from 'react';

import { secureDB } from '../config/varibleApi';
import { Token } from '../Interfaces/api/Token';

export const useToken = () => {
  const deleteToken = useCallback(async () => {
    const { deleteSecure, getSecure } = secureDB;
    try {
      const responseToken = await getSecure('Token-access');
      if (responseToken) await deleteSecure('Token-access');
      const responseRefresh = await getSecure('Token-refresh');
      if (responseRefresh) await deleteSecure('Token-refresh');
      const responseExpirate = await getSecure('Token-expirate');
      if (responseExpirate) await deleteSecure('Token-expirate');
      return true;
    } catch (error) {
      return false;
    }
  }, []);

  const saveTokenSecure = useCallback(
    async (token: Token): Promise<boolean> => {
      const { saveSecure } = secureDB;
      const naw = new Date();
      naw.setSeconds(naw.getSeconds() + token.expires_in);
      try {
        await saveSecure('Token-access', token.access_token);
        await saveSecure('Token-refresh', token.refresh_token);
        await saveSecure('Token-expirate', String(naw.valueOf()));
        return true;
      } catch (error) {
        return false;
      }
    },
    [],
  );
  return {
    saveTokenSecure,
    deleteToken,
  };
};
