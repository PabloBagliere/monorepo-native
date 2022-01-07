import React, { FC } from 'react';

import { paramsObtions } from '../Interfaces';

interface props {
  data: paramsObtions;
}

export const FormDynamic: FC<props> = ({ data }) => {
  return <pre>{data} </pre>;
};
