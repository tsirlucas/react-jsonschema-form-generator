import * as React from 'react';
import {FormControl} from 'react-bootstrap';
import {TAnyField} from 'src/models';

export interface IProps {
  elementKey: string;
  fieldSchema: TAnyField;
  updateWithParentPath: (path: string[], value: string | number) => void;
}

export class Field extends React.Component<IProps> {
  protected handleChange = (key: string) => (e: React.FormEvent<FormControl>) => {
    const value = (e.target as HTMLTextAreaElement).value;
    const path = [this.props.elementKey, key];
    this.props.updateWithParentPath(path, value);
  };

  protected updateWithChildValue = (path: string[], value: string | number) => {
    const newPath = [this.props.elementKey, ...path];
    this.props.updateWithParentPath(newPath, value);
  };
}
