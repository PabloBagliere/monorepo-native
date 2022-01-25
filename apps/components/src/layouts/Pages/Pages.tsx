import React, { FC } from 'react';

import { NavBar } from '../../components/organism/NavBar';

export const Pages: FC = ({ children }): JSX.Element => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
