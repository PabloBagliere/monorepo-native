import { T } from './anyT';

export interface propsSecureDB {
  saveSecure: (key: string, value: T) => Promise<void>;
  getSecure: (key: string) => Promise<string | null>;
  deleteSecure: (key: string) => Promise<void>;
}
