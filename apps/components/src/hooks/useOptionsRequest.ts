import useSWR from 'swr';
import { useContext } from 'react';

import { T } from '../Interfaces/anyT';
import { paramsObtions } from '../Interfaces/optionsResponse/paramsObtions';
import ContextUser from '../context/ContextUser';

interface response {
  Date: paramsObtions | undefined;
  isLoading: boolean;
  isError: T;
}

interface props {
  query: string;
  title: string;
}

export const useOptionsRequest: (parmas: props) => response = ({
  query,
  title,
}) => {
  const { isSetToken } = useContext(ContextUser);
  const { data, error } = useSWR<paramsObtions>(
    isSetToken
      ? {
          url: query,
          config: {
            method: 'OPTIONS',
            params: {
              _title: title,
            },
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
