import * as React from 'react';
import {Checkbox} from 'react-bootstrap';
import {TitleInput} from 'components';

import {Field} from './Field';

export class TextField extends Field {
  public render() {
    return (
      <>
        <TitleInput
          label="Title input"
          value={this.props.fieldSchema.title}
          onChange={this.handleChange('title')}
        />
        {this.props.elementKey !== 'items' && (
          <Checkbox onChange={this.handleRequired}>Required</Checkbox>
        )}
      </>
    );
  }
}
