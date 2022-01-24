import axios, { AxiosRequestConfig } from 'axios';

interface props {
  url: string;
  config: AxiosRequestConfig;
}

const fetcher = ({ url, config }: props) =>
  axios({ url, ...config }).then((res) => res.data);

export default fetcher;
