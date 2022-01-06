import { Token } from '../interfaces';
import { setToken } from '../services/Api';

import { saveSecure } from './SegureStorage';

export const setTokenApi = async (token: Token): Promise<boolean> => {
  const naw = new Date();
  naw.setSeconds(naw.getSeconds() + token.expires_in);
  try {
    await saveSecure('Token-full', JSON.stringify(token));
    await saveSecure(
      'Token-access',
      `${token.token_type} ${token.access_token}`,
    );
    await saveSecure('Token-refresh', token.refresh_token);
    await saveSecure('Token-expirate', String(naw.valueOf()));
    setToken(`${token.token_type} ${token.access_token}`);
    return true;
  } catch (error) {
    return false;
  }
};
