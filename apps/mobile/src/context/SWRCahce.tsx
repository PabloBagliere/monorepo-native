import { T } from 'components-app-histrix';
import React, { FC } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { SWRConfig } from 'swr';

import instance from '../services/Api';
interface paramsFetcher {
  url: string;
  params?: T;
  token?: string;
}

const fetcher = ({ url, params }: paramsFetcher) =>
  instance.get(url, params).then((res) => res.data);

export const SWRCache: FC = ({ children }) => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isOnline() {
          return true;
        },
        isVisible() {
          return true;
        },
        initFocus(callback) {
          let appState = AppState.currentState;
          const onAppSateChange = (nextAppState: AppStateStatus) => {
            if (
              appState.match(/inactive|background/) &&
              nextAppState === 'active'
            )
              callback();
            appState = nextAppState;
          };
          const subscrption = AppState.addEventListener(
            'change',
            onAppSateChange,
          );

          return () => {
            subscrption.remove();
          };
        },
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};
