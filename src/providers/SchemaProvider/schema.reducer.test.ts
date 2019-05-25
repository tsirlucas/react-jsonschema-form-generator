import set from 'lodash/set';
import omit from 'lodash/omit';

import {actions} from './schema.actions';

describe('schema reducer', () => {
  jest.mock('uuid/v4', () => () => 'mockedKey');
  const {initialState, schema} = require('./schema.reducer');

  const mockedText = {
    type: 'object',
    title: 'Your Form',
    properties: {
      mockedKey: {
        class: 'text',
        type: 'string',
        title: 'Your title',
        description: '',
        minLength: 0,
        maxLength: 20,
      },
    },
    required: [],
  };

  it('should return the initial state', () => {
    const state = schema(initialState, {type: 'ANY'});
    expect(state).toEqual(initialState);
  });

  it('should handle addToSchema', () => {
    const action = actions.addToSchema({path: ['properties'], element: 'text'});
    const state = schema(initialState, action);

    expect(state).toEqual(mockedText);
  });

  it('should handle removeFromSchema', () => {
    const path = ['properties', 'mockedKey'];
    const action = actions.removeFromSchema(path);
    const state = schema(mockedText, action);

    expect(state).toEqual(omit(mockedText, path));
  });

  it('should handle updateSchema', () => {
    const action = actions.updateSchema({path: ['title'], value: 'Updated Title'});
    const state = schema(initialState, action);

    expect(state).toEqual(set(initialState, ['title'], 'Updated Title'));
  });

  it('should handle nested updates', () => {
    const path = ['properties', 'mockedKey', 'title'];
    const value = 'Updated Title';
    const action = actions.updateSchema({path, value});
    const state = schema(mockedText, action);

    expect(state).toEqual(set(mockedText, path, value));
  });

  it('should handle setRequiredOnSchema with true', () => {
    const action = actions.setRequiredOnSchema({path: ['properties', 'mockedKey'], value: true});
    const state = schema(mockedText, action);

    expect(state).toEqual(set(mockedText, ['required'], ['mockedKey']));
  });

  it('should handle setRequiredOnSchema with false', () => {
    const action = actions.setRequiredOnSchema({path: ['properties', 'mockedKey'], value: false});
    const state = schema(set(mockedText, ['required'], ['mockedKey']), action);

    expect(state).toEqual(set(mockedText, ['required'], []));
  });
});
