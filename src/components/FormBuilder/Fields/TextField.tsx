import * as React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import {TitleInput} from '../../TitleInput';
import {Field} from './Field';

export class TextField extends Field {
  public render() {
    return (
      <Tabs id={this.props.elementKey}>
        <Tab title="Text field">
          <TitleInput
            label="Title input"
            value={this.props.fieldSchema.title}
            onChange={this.handleChange('title')}
          />
        </Tab>
      </Tabs>
    );
  }
}
