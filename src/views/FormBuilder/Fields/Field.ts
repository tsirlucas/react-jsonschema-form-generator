import React from 'react';
import {FormControl} from 'react-bootstrap';

export interface IProps<T> {
  elementKey: string;
  fieldSchema: T;
  updateWithParentPath: (path: string[], value: string | number) => void;
  createWithParentPath: (path: string[], option: string) => void;
  removeWithParentPath: (path: string[]) => void;
  setRequiredWithParentPath: (path: string[], value: boolean) => void;
}

export class Field<T> extends React.Component<IProps<T>> {
  protected handleChange = (key: string) => (value: string | number) => {
    const path = [this.props.elementKey, key];
    this.props.updateWithParentPath(path, value);
  };

  protected handleRequired = (e: React.FormEvent<FormControl>) => {
    const {checked} = e.target as HTMLInputElement;
    const path = [this.props.elementKey];
    this.props.setRequiredWithParentPath(path, checked);
  };
}
