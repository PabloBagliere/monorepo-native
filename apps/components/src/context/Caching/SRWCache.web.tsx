import React, { FC } from 'react';
import { SWRConfig } from 'swr';

import fetcher from './fetcher';

function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'));

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app-cache', appCache);
  });

  // We still use the map for write & read for performance.
  return map;
}

export const SWRCache: FC = ({ children }) => {
  return (
    <SWRConfig
      value={{
        provider: localStorageProvider,
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};
