import produce from 'immer';
import set from 'lodash/set';
import omit from 'lodash/omit';
import update from 'lodash/update';
import {createReducer} from 'redux-act';
import uuid from 'uuid/v4';

import {actions} from './schema.actions';
import * as schemas from './schema.mocks';
import {ISchema} from 'models';

export const initialState = ({
  type: 'object',
  title: 'Your Form',
  properties: {},
  required: [],
} as unknown) as ISchema;

export const schema = createReducer({}, initialState)
  .on(actions.updateSchema, (state, {path, value}) =>
    produce(state, (draftState) => set(draftState, path, value)),
  )
  .on(actions.addToSchema, (state, {path, element}) =>
    produce(state, (draftState) => {
      const lastPath = path[path.length - 1];
      if (lastPath === 'items') {
        return set(draftState, path, schemas[`${element}Mock`]);
      }

      const key = uuid();
      const pathWithKey = [...path, key];
      return set(draftState, pathWithKey, schemas[`${element}Mock`]);
    }),
  )
  .on(actions.removeFromSchema, (state, path) =>
    produce(state, (draftState) => {
      const lastPath = path[path.length - 1];
      if (lastPath === 'items') {
        return set(draftState, path, {});
      }
      return omit(draftState, path) as typeof draftState;
    }),
  )
  .on(
    actions.setRequiredOnSchema,
    (state, {path, value}): typeof initialState =>
      produce(state, (draftState) => {
        const key = path[path.length - 1];
        let pathToEdit = [...path];

        if (key === 'items') {
          return state;
        }

        // Back on the tree to avoid setting the element key on its own required field
        // Twice because we want to avoid group's properties field
        pathToEdit = pathToEdit.slice(0, -2);

        return update(draftState, [...pathToEdit, 'required'], (list: string[]) => {
          if (value) {
            return [...list, key];
          }

          return list.filter((item: string) => item !== key);
        }) as typeof state;
      }),
  );
