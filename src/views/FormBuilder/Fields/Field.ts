import * as React from 'react';
import {FormControl} from 'react-bootstrap';
import {TAnyField} from 'models';

export interface IProps {
  elementKey: string;
  fieldSchema: TAnyField;
  updateWithParentPath: (path: string[], value: string | number) => void;
  createWithParentPath: (path: string[], option: string) => void;
  removeWithParentPath: (path: string[]) => void;
}

export class Field extends React.Component<IProps> {
  protected handleChange = (key: string) => (e: React.FormEvent<FormControl>) => {
    const value = (e.target as HTMLTextAreaElement).value;
    const path = [this.props.elementKey, key];
    this.props.updateWithParentPath(path, value);
  };
}
