import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {TextInput} from 'components';
import {IDateField} from 'models';

import {DateField} from './DateField';
import {IProps} from './Field';

configure({adapter: new Adapter()});
describe('DateField', () => {
  let props = {} as IProps<IDateField>;

  beforeEach(() => {
    props = {
      elementKey: 'key',
      fieldSchema: {
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

  const dateField = () => {
    return shallow(<DateField {...props} />);
  };

  it('renders form', () => {
    expect(dateField().find(TextInput).length).toEqual(2);
  });

  it('calls cb on input changes', () => {
    dateField()
      .find(TextInput)
      .first()
      .props()
      .onChange('new value');

    expect(props.updateWithParentPath).toHaveBeenCalled();
  });
});
