import * as React from 'react';
import {FormControl} from 'react-bootstrap';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import {IProps} from './NumberInput';
import {NumberInput} from './NumberInput';

configure({adapter: new Adapter()});
describe('DateField', () => {
  let props = {} as IProps;

  beforeEach(() => {
    props = {
      label: 'label',
      value: 10,
      onChange: jest.fn(),
    };
  });

  const numberInput = () => {
    return shallow(<NumberInput {...props} />);
  };

  it('renders form with props', () => {
    const component = numberInput();
    expect(component.find(FormControl).length).toEqual(1);
    expect(component.find(FormControl).props().value).toEqual(props.value);
  });

  it('calls cb on input changes', () => {
    const component = numberInput();
    const childProps = component.find(FormControl).props() as {
      onChange: (e: React.FormEvent<FormControl>) => void;
    };
    const mockedEv = {target: {value: '15'}};

    childProps.onChange(mockedEv as any);

    expect(props.onChange).toHaveBeenCalledWith(15);
  });
});
