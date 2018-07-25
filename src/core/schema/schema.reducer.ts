import {List, Map} from 'immutable';
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
    required: List([]),
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
  })
  .on(actions.removeFromSchema, (state, path) => {
    const lastPath = path[path.length - 1];
    if (lastPath === 'items') {
      return state.setIn(path, Map({}));
    }
    return state.removeIn(path);
  })
  .on(
    actions.setRequiredOnSchema,
    (state, {path, value}): typeof initialState.data => {
      const key = path[path.length - 1];
      let pathToEdit = [...path];

      if (key === 'items') {
        return state;
      }

      // Back on the tree to avoid setting the element key on its own required field
      // Twice because we want to avoid group's properties field
      pathToEdit = pathToEdit.slice(0, -2);

      return state.updateIn([...pathToEdit, 'required'], (list) => {
        if (value) {
          return list.push(key);
        }

        return list.filterNot((item: string) => item === key);
      });
    },
  );
