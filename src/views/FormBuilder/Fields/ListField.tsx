import * as React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
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

  public render() {
    const {items} = this.props.fieldSchema as IListField;
    const hasItems = Object.keys(items).length > 0;
    return (
      <Tabs id={this.props.elementKey}>
        <Tab title="List field">
          <TitleInput
            label="Title input"
            value={this.props.fieldSchema.title}
            onChange={this.handleChange('title')}
          />
          {hasItems ? (
            <AnyField
              elementKey={'items'}
              element={items}
              updateWithParentPath={this.updateWithChildValue}
              createWithParentPath={this.createWithChildValue}
            />
          ) : (
            <AddButton onSelect={this.create} />
          )}
        </Tab>
      </Tabs>
    );
  }
}
