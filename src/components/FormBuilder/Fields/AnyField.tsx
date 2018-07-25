import * as React from 'react';
import {TAnyField} from 'models';

import {GroupField} from './GroupField';
import {ListField} from './ListField';
import {TextField} from './TextField';

export const ANY_FIELD = {
  text: TextField,
  group: GroupField,
  list: ListField,
};

interface IProps {
  elementKey: string;
  element: TAnyField;
  updateWithParentPath: (path: string[], value: string | number) => void;
  createWithParentPath: (path: string[], option: string) => void;
}

export const AnyField = ({
  elementKey,
  element,
  updateWithParentPath,
  createWithParentPath,
}: IProps) => {
  const Component = ANY_FIELD[element.class];

  return (
    <Component
      {...{elementKey, updateWithParentPath, createWithParentPath}}
      fieldSchema={element}
    />
  );
};
