import { AxiosResponseHeaders } from 'axios';
import { T } from 'components-app-histrix';

export interface ResponseErrorApi {
  data: string | T;
  status: number;
  headers: null | AxiosResponseHeaders;
}
