import * as React from 'react';
import {Checkbox} from 'react-bootstrap';
import {Col, Grid, Row} from 'react-bootstrap';
import {AddButton, TextInput} from 'components';
import {IGroup} from 'models';

import {AnyField} from './AnyField';
import {Grouper} from './Grouper';

export class GroupField extends Grouper<IGroup> {
  protected keyPaths = ['properties'];

  public render() {
    const {properties} = this.props.fieldSchema;
    const propertiesKeys = Object.keys(properties);

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
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <TextInput
              label="Field Description"
              value={this.props.fieldSchema.description}
              onChange={this.handleChange('description')}
            />
          </Col>
          <Col xs={12} md={12}>
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
          </Col>
          <Col xs={8} md={8}>
            <AddButton onSelect={this.create} />
          </Col>
          <Col xs={4} md={4}>
            {this.props.elementKey !== 'items' && (
              <Checkbox onChange={this.handleRequired}>Required</Checkbox>
            )}
          </Col>
        </Row>
      </Grid>
    );
  }
}
