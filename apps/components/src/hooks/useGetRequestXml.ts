import useSWR from 'swr';
import { useContext } from 'react';
import { AxiosRequestConfig } from 'axios';

import { T } from '../Interfaces/anyT';
import ContextUser from '../context/ContextUser';
import { GetResponse } from '../Interfaces/api/getRespose/getResponse';

interface response {
  Date: GetResponse | undefined;
  isLoading: boolean;
  isError: T;
}

interface props {
  query: string;
  params: AxiosRequestConfig;
}

export const useGetRequestXml: (parmas: props) => response = ({
  query,
  params,
}) => {
  const { isSetToken } = useContext(ContextUser);
  const { data, error } = useSWR<GetResponse>(
    isSetToken
      ? {
          url: query,
          config: {
            method: 'GET',
            ...params,
          },
        }
      : null,
  );

  return {
    Date: data,
    isLoading: !error && !data && isSetToken,
    isError: error,
  };
};
