import React from 'react';
import {Checkbox} from 'react-bootstrap';
import {Col, Grid, Row} from 'react-bootstrap';
import {NumberInput, TextInput} from 'components';
import {ITextField} from 'models';

import {Field} from './Field';

export class TextField extends Field<ITextField> {
  public render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={4} md={4}>
            <TextInput
              label="Field title"
              value={this.props.fieldSchema.title}
              onChange={this.handleChange('title')}
            />
          </Col>
          <Col xs={4} md={4}>
            <NumberInput
              label="Min length"
              value={this.props.fieldSchema.minLength}
              onChange={this.handleChange('minLength')}
            />
          </Col>
          <Col xs={4} md={4}>
            <NumberInput
              label="Max length"
              value={this.props.fieldSchema.maxLength}
              onChange={this.handleChange('maxLength')}
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
