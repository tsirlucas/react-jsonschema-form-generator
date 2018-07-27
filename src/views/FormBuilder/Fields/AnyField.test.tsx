import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import {AnyField} from './AnyField';
import {IProps} from './AnyField';
import {DateField} from './DateField';

configure({adapter: new Adapter()});
describe('AnyField', () => {
  let props = {} as IProps;

  beforeEach(() => {
    props = {
      elementKey: 'key',
      element: {
        class: 'date',
        type: 'string',
        title: 'Your title',
        description: '',
        format: 'date',
      },
      updateWithParentPath: jest.fn(),
      createWithParentPath: jest.fn(),
      removeWithParentPath: jest.fn(),
      setRequiredWithParentPath: jest.fn(),
    };
  });

  const anyField = () => {
    return shallow(<AnyField {...props} />);
  };

  it('renders right field', () => {
    expect(anyField().find(DateField).length).toEqual(1);
  });
});
