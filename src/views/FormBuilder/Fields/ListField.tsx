import * as React from 'react';
import {AddButton, TitleInput} from 'components';
import {IListField} from 'models';

import {AnyField} from './AnyField';
import {Grouper} from './Grouper';

export class ListField extends Grouper {
  protected create = (option: string) => () => {
    this.props.createWithParentPath([this.props.elementKey, 'items'], option);
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
