import {createAction} from 'redux-act';

import {IField} from 'src/models';

interface IUpdatePayload {
  path: string;
  value: IField;
}

export const actions = {
  updateSchema: createAction<IUpdatePayload>('schema/UPDATE_SCHEMA'),
};

type TActionsType = typeof actions;
export type TActions = {[P in keyof TActionsType]: ReturnType<TActionsType[P]>};
