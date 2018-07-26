import * as React from 'react';
import {Checkbox} from 'react-bootstrap';
import {Col, Grid, Row} from 'react-bootstrap';
import {AddButton, NumberInput, TextInput} from 'components';
import {IListField} from 'models';

import {AnyField} from './AnyField';
import {Grouper} from './Grouper';

export class ListField extends Grouper<IListField> {
  protected create = (option: string) => () => {
    this.props.createWithParentPath([this.props.elementKey, 'items'], option);
  };

  public render() {
    const {items} = this.props.fieldSchema;
    const hasItems = Object.keys(items).length > 0;

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
              label="Min items"
              value={this.props.fieldSchema.minItems}
              onChange={this.handleChange('minItems')}
            />
          </Col>
          <Col xs={4} md={4}>
            <NumberInput
              label="Max items"
              value={this.props.fieldSchema.maxItems}
              onChange={this.handleChange('maxItems')}
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
          <Col xs={hasItems ? 12 : 8} md={hasItems ? 12 : 8}>
            {hasItems ? (
              <AnyField
                elementKey={'items'}
                element={items}
                updateWithParentPath={this.updateWithChildValue}
                createWithParentPath={this.createWithChildValue}
                removeWithParentPath={this.removeWithChildValue}
                setRequiredWithParentPath={this.setRequiredWithChildValue}
              />
            ) : (
              <AddButton onSelect={this.create} />
            )}
          </Col>
          {hasItems && <Col xs={8} md={8} />}
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
