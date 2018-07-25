import * as React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import {capitalizeFirstLetter} from 'utils';

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
  removeWithParentPath: (path: string[]) => void;
}

export const AnyField = ({
  elementKey,
  element,
  updateWithParentPath,
  createWithParentPath,
  removeWithParentPath,
}: IProps) => {
  const Component = ANY_FIELD[element.class];

  const onSelect = () => {
    removeWithParentPath([elementKey]);
  };

  return (
    <Tabs id={elementKey} className="mg-l-md mg-b-md" onSelect={onSelect}>
      <Tab title={`${capitalizeFirstLetter(element.class)} field`}>
        <Component
          {...{elementKey, updateWithParentPath, createWithParentPath, removeWithParentPath}}
          fieldSchema={element}
        />
      </Tab>
      <Tab title="X" tabClassName="remove-button pull-right" />
    </Tabs>
  );
};
