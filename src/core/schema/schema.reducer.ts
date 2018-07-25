import {Map} from 'immutable';
import {createReducer} from 'redux-act';
import * as uuid from 'uuid/v4';

import {actions} from 'src/core/schema/schema.actions';
import {ISchema} from 'src/models';

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
    const key = uuid();
    const pathWithKey = [...path, key];
    return state.setIn(pathWithKey, Map(schemas[element]));
  });
