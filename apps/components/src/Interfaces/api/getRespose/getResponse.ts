import { paramsResponseGet } from './paramsResponseGet';

export interface GetResponse {
  data: Array<paramsResponseGet>;
  draw: string;
  paging: null | string;
  recordsFiltered: number;
  recordsTotal: number;
}
