import {Map} from 'immutable';
import {createReducer} from 'redux-act';
import * as uuid from 'uuid/v4';

import {ISchema} from 'models';

import {actions} from './schema.actions';
import * as schemas from './schema.mocks';

export const initialState = {
  data: Map<string, ISchema>({
    type: 'object',
    title: 'Your Form',
    properties: Map({}),
  }),
};

export const schema = createReducer({}, initialState.data)
  .on(actions.updateSchema, (state, {path, value}) => state.setIn(path, value))
  .on(actions.addToSchema, (state, {path, element}) => {
    const lastPath = path[path.length - 1];
    if (lastPath === 'items') {
      return state.setIn(path, Map(schemas[element]));
    }

    const key = uuid();
    const pathWithKey = [...path, key];
    return state.setIn(pathWithKey, Map(schemas[element]));
  });
