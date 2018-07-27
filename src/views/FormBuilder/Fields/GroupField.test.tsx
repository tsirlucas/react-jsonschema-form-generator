import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import {TextInput} from 'components';
import {IGroup, ITextField} from 'models';

import {AnyField} from './AnyField';
import {IProps} from './Field';
import {GroupField} from './GroupField';

configure({adapter: new Adapter()});
describe('GroupField', () => {
  let props = {} as IProps<IGroup>;

  beforeEach(() => {
    props = {
      elementKey: 'key',
      fieldSchema: {
        class: 'group',
        type: 'object',
        title: 'Your title',
        description: '',
        required: [],
        properties: {
          nestedKey: {
            class: 'text',
            type: 'string',
            title: 'Your title',
            description: '',
          } as ITextField,
        },
      },
      updateWithParentPath: jest.fn(),
      createWithParentPath: jest.fn(),
      removeWithParentPath: jest.fn(),
      setRequiredWithParentPath: jest.fn(),
    };
  });

  const groupField = () => {
    return shallow(<GroupField {...props} />);
  };

  it('renders form', () => {
    expect(groupField().find(TextInput).length).toEqual(2);
  });

  it('renders right child', () => {
    const component = groupField();
    expect(component.find(AnyField).length).toEqual(1);
    expect(component.find(AnyField).props().element).toEqual(
      props.fieldSchema.properties.nestedKey,
    );
  });
});
