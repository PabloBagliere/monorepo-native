import { Token } from '../Interfaces/api/Token';
import { setToken } from '../config/InstanceApi';
import { secureDB } from '../config/varibleApi';

export const saveToken = async (token: Token): Promise<boolean> => {
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
