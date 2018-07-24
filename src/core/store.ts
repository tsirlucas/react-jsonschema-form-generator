import {createStore} from 'redux';

import {TActionsValues} from 'src/core/rootAction';
import {rootReducer, RootState} from 'src/core/rootReducer';

export type RootState = RootState;

export const store = createStore<RootState, TActionsValues, null, null>(rootReducer);
