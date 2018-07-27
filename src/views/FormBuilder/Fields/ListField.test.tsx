import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import {TextInput} from 'components';
import {IListField, ITextField} from 'models';

import {AnyField} from './AnyField';
import {IProps} from './Field';
import {ListField} from './ListField';

configure({adapter: new Adapter()});
describe('ListField', () => {
  let props = {} as IProps<IListField>;

  beforeEach(() => {
    props = {
      elementKey: 'key',
      fieldSchema: {
        class: 'list',
        type: 'array',
        title: 'Your title',
        description: '',
        minItems: 0,
        maxItems: 10,
        items: {
          class: 'text',
          type: 'string',
          title: 'Your title',
          description: '',
        } as ITextField,
      },
      updateWithParentPath: jest.fn(),
      createWithParentPath: jest.fn(),
      removeWithParentPath: jest.fn(),
      setRequiredWithParentPath: jest.fn(),
    };
  });

  const listField = () => {
    return shallow(<ListField {...props} />);
  };

  it('renders form', () => {
    expect(listField().find(TextInput).length).toEqual(2);
  });

  it('renders right child', () => {
    const component = listField();
    expect(component.find(AnyField).length).toEqual(1);
    expect(component.find(AnyField).props().element).toEqual(props.fieldSchema.items);
  });
});
