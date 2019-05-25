import React from 'react';
import {Checkbox} from 'react-bootstrap';
import {Col, Grid, Row} from 'react-bootstrap';
import {TextInput} from 'components';
import {IDateField} from 'models';

import {Field} from './Field';

export class DateField extends Field<IDateField> {
  public render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={8} md={8}>
            <TextInput
              label="Field title"
              value={this.props.fieldSchema.title}
              onChange={this.handleChange('title')}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8} md={8}>
            <TextInput
              label="Field Description"
              value={this.props.fieldSchema.description}
              onChange={this.handleChange('description')}
            />
          </Col>
          <Col xs={4} md={4}>
            {this.props.elementKey !== 'items' && (
              <Checkbox className="mg-t-xl" onChange={this.handleRequired}>
                Required
              </Checkbox>
            )}
          </Col>
        </Row>
      </Grid>
    );
  }
}
