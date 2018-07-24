import {createAction} from 'redux-act';

interface IUpdatePayload {
  path: string[];
  value: string | number;
}

export const actions = {
  updateSchema: createAction<IUpdatePayload>('schema/UPDATE_SCHEMA'),
};

type TActionsType = typeof actions;
export type TActions = {[P in keyof TActionsType]: ReturnType<TActionsType[P]>};
