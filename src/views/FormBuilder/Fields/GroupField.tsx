import * as React from 'react';
import {Checkbox} from 'react-bootstrap';
import {AddButton, TitleInput} from 'components';
import {IGroup} from 'models';

import {AnyField} from './AnyField';
import {Grouper} from './Grouper';

export class GroupField extends Grouper {
  protected keyPaths = ['properties'];

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
            setRequiredWithParentPath={this.setRequiredWithChildValue}
          />
        ))}
        {this.props.elementKey !== 'items' && (
          <Checkbox onChange={this.handleRequired}>Required</Checkbox>
        )}
        <AddButton onSelect={this.create} />
      </>
    );
  }
}
