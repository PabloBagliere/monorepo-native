import { AxiosRequestConfig } from 'axios';

import instance from '../../services/Api';

interface props {
  url: string;
  config: AxiosRequestConfig;
}

const fetcher = ({ url, config }: props) =>
  instance({ url, ...config }).then((res) => res.data);

export default fetcher;
