import {List, Map} from 'immutable';

import {actions} from './schema.actions';

describe('schema reducer', () => {
  jest.mock('uuid/v4', () => () => 'mockedKey');
  const {initialState, schema} = require('./schema.reducer');

  const mockedText = Map({
    type: 'object',
    title: 'Your Form',
    properties: Map({
      mockedKey: Map({
        class: 'text',
        type: 'string',
        title: 'Your title',
        description: '',
        minLength: 0,
        maxLength: 20,
      }),
    }),
    required: List([]),
  });

  it('should return the initial state', () => {
    const state = schema(initialState, {type: 'ANY'});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle addToSchema', () => {
    const action = actions.addToSchema({path: ['properties'], element: 'text'});
    const state = schema(initialState, action);

    expect(state.toJS()).toEqual(mockedText.toJS());
  });

  it('should handle removeFromSchema', () => {
    const action = actions.removeFromSchema(['properties', 'mockedKey']);
    const state = schema(mockedText, action);

    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle updateSchema', () => {
    const action = actions.updateSchema({path: ['title'], value: 'Updated Title'});
    const state = schema(initialState, action);

    expect(state.toJS()).toEqual(initialState.setIn(['title'], 'Updated Title').toJS());
  });

  it('should handle nested updates', () => {
    const path = ['properties', 'mockedKey', 'title'];
    const value = 'Updated Title';
    const action = actions.updateSchema({path, value});
    const state = schema(mockedText, action);

    expect(state.toJS()).toEqual(mockedText.setIn(path, value).toJS());
  });

  it('should handle setRequiredOnSchema with true', () => {
    const action = actions.setRequiredOnSchema({path: ['properties', 'mockedKey'], value: true});
    const state = schema(mockedText, action);

    expect(state.toJS()).toEqual(mockedText.setIn(['required'], List(['mockedKey'])).toJS());
  });

  it('should handle setRequiredOnSchema with false', () => {
    const action = actions.setRequiredOnSchema({path: ['properties', 'mockedKey'], value: false});
    const state = schema(mockedText.setIn(['required'], List(['mockedKey'])), action);

    expect(state.toJS()).toEqual(mockedText.setIn(['required'], List([])).toJS());
  });
});
