import {createStore} from 'redux';

import {TActionsValues} from './rootAction';
import {rootReducer, RootState} from './rootReducer';

export type RootState = RootState;

export const store = createStore<RootState, TActionsValues, null, null>(rootReducer);
