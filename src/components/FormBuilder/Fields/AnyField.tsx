import * as React from 'react';
import {TAnyField} from 'models';
import {GroupField} from 'src/components/FormBuilder/Fields/GroupField';

import {TextField} from './TextField';

export const ANY_FIELD = {
  text: TextField,
  group: GroupField,
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
  const type = elementKey.split('-')[0];
  const Component = ANY_FIELD[type];

  return (
    <Component
      {...{elementKey, updateWithParentPath, createWithParentPath}}
      fieldSchema={element}
    />
  );
};
