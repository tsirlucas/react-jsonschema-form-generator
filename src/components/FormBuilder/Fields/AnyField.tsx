import * as React from 'react';
import {TAnyField} from 'models';

import {TextField} from './TextField';

export const ANY_FIELD = {
  text: TextField,
};

interface IProps {
  elementKey: string;
  element: TAnyField;
  updateWithParentPath: (path: string[], value: string | number) => void;
}

export const AnyField = ({elementKey, element, updateWithParentPath}: IProps) => {
  const type = elementKey.split('-')[0];
  const Component = ANY_FIELD[type];

  return <Component {...{elementKey, updateWithParentPath}} fieldSchema={element} />;
};
