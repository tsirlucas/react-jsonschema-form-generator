import * as React from 'react';
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
      </>
    );
  }
}
