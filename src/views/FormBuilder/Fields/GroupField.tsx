import * as React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
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

  public render() {
    const {properties} = this.props.fieldSchema as IGroup;
    const propertiesKeys = Object.keys(properties);

    return (
      <Tabs id={this.props.elementKey}>
        <Tab title="Group field">
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
            />
          ))}
          <AddButton onSelect={this.create} />
        </Tab>
      </Tabs>
    );
  }
}
