import * as React from 'react';
import {AddButton, TitleInput} from 'components';
import {IGroup} from 'models';

import {AnyField} from './AnyField';
import {Field} from './Field';

export class GroupField extends Field {
  private create = (option: string) => () => {
    this.props.createWithParentPath([this.props.elementKey, 'properties'], option);
  };

  private createWithChildValue = (path: string[], option: string) => {
    const newPath = [this.props.elementKey, 'properties', ...path];
    this.props.createWithParentPath(newPath, option);
  };

  protected updateWithChildValue = (path: string[], value: string | number) => {
    const newPath = [this.props.elementKey, 'properties', ...path];
    this.props.updateWithParentPath(newPath, value);
  };

  protected removeWithChildValue = (path: string[]) => {
    const newPath = [this.props.elementKey, 'properties', ...path];
    this.props.removeWithParentPath(newPath);
  };

  public render() {
    const {properties} = this.props.fieldSchema as IGroup;
    const propertiesKeys = Object.keys(properties);

    return (
      <>
        <TitleInput
          label="Title input"
          value={this.props.fieldSchema.title}
          onChange={this.handleChange('title')}
        />
        {propertiesKeys.map((key) => (
          <AnyField
            key={key}
            elementKey={key}
            element={properties[key]}
            updateWithParentPath={this.updateWithChildValue}
            createWithParentPath={this.createWithChildValue}
            removeWithParentPath={this.removeWithChildValue}
          />
        ))}
        <AddButton onSelect={this.create} />
      </>
    );
  }
}
