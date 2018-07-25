import {createAction} from 'redux-act';

interface IUpdatePayload {
  path: string[];
  value: string | number;
}

interface IAddToPayload {
  path: string[];
  element: string;
}

export const actions = {
  addToSchema: createAction<IAddToPayload>('schema/ADD_TO_SCHEMA'),
  updateSchema: createAction<IUpdatePayload>('schema/UPDATE_SCHEMA'),
  removeFromSchema: createAction<string[]>('schema/REMOVE_FROM_SCHEMA'),
};

type TActionsType = typeof actions;
export type TActions = {[P in keyof TActionsType]: ReturnType<TActionsType[P]>};
