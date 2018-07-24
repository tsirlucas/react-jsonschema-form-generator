import {combineReducers, Reducer} from 'redux';

import {schema} from 'src/core/schema';

const rootReducerObj = {
  schema,
};

type RootType = typeof rootReducerObj;
type UnboxReducer<T> = T extends Reducer<infer U> ? U : T;

// State should be readonly
export type RootState = {[P in keyof RootType]: UnboxReducer<RootType[P]>};

export const rootReducer = combineReducers<RootState>(rootReducerObj);
