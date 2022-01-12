import { AxiosResponseHeaders } from 'axios';

import { T } from '../anyT';

export interface ResponseErrorApi {
  error: boolean;
  info: {
    data: string | T | Error;
    status?: number;
    headers?: null | AxiosResponseHeaders;
  };
}
