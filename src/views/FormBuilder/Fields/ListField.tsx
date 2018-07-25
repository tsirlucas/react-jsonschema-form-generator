import * as React from 'react';
import {AddButton, TitleInput} from 'components';
import {IListField} from 'models';

import {AnyField} from './AnyField';
import {Field} from './Field';

export class ListField extends Field {
  private create = (option: string) => () => {
    this.props.createWithParentPath([this.props.elementKey, 'items'], option);
  };

  private createWithChildValue = (path: string[], option: string) => {
    const newPath = [this.props.elementKey, ...path];
    this.props.createWithParentPath(newPath, option);
  };

  protected updateWithChildValue = (path: string[], value: string | number) => {
    const newPath = [this.props.elementKey, ...path];
    this.props.updateWithParentPath(newPath, value);
  };

  protected removeWithChildValue = (path: string[]) => {
    const newPath = [this.props.elementKey, ...path];
    this.props.removeWithParentPath(newPath);
  };

  public render() {
    const {items} = this.props.fieldSchema as IListField;
    const hasItems = Object.keys(items).length > 0;

    return (
      <>
        <TitleInput
          label="Title input"
          value={this.props.fieldSchema.title}
          onChange={this.handleChange('title')}
        />,
        {hasItems ? (
          <AnyField
            elementKey={'items'}
            element={items}
            updateWithParentPath={this.updateWithChildValue}
            createWithParentPath={this.createWithChildValue}
            removeWithParentPath={this.removeWithChildValue}
          />
        ) : (
          <AddButton onSelect={this.create} />
        )}
      </>
    );
  }
}
