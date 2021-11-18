import { TextArea } from 'native-base';
import { ITextAreaProps } from 'native-base/lib/typescript/components/primitives/TextArea';
import React, { FC } from 'react';

type props = ITextAreaProps;

export const AtomicTextarea: FC<props> = ({ ...props }): JSX.Element => {
  return <TextArea {...props} />;
};
