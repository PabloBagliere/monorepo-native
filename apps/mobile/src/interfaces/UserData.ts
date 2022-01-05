import { T } from 'components-app-histrix';

import { SocialNetworks } from './SocialNetworks';

export interface UserData {
  companyName: string;
  email: string;
  first_name: string;
  fullname: string;
  id: string | number;
  last_name: null | string;
  occupation: string | null;
  phone: string | null | number;
  roles: Array<T>;
  socialNetworks: SocialNetworks;
  user_id: string | number | null;
  username: string | null;
  verified: string | Date | number | null;
}
