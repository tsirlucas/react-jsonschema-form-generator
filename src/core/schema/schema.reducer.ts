import {Map} from 'immutable';
import {createReducer} from 'redux-act';

import {actions} from 'src/core/schema/schema.actions';
import {ISchema} from 'src/models';

export const initialState = {
  data: Map({
    type: 'object',
    title: 'Your Form',
    properties: {},
  } as ISchema),
};

export const schema = createReducer({}, initialState.data).on(
  actions.updateSchema,
  (state, payload) => state.setIn(payload.path, payload.value),
);

export type UserState = typeof initialState;
