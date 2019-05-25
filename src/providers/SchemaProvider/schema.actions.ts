import {useMemo} from 'react';
import {createAction} from 'redux-act';
import {bindActionCreators} from 'utils';

interface IUpdatePayload {
  path: string[];
  value: string | number | boolean;
}

interface IAddToPayload {
  path: string[];
  element: string;
}

export const actions = {
  addToSchema: createAction<IAddToPayload>('ADD_TO_SCHEMA'),
  updateSchema: createAction<IUpdatePayload>('UPDATE_SCHEMA'),
  removeFromSchema: createAction<string[]>('REMOVE_FROM_SCHEMA'),
  setRequiredOnSchema: createAction<IUpdatePayload>('SET_REQUIRED_ON_SCHEMA'),
};

export const useActions = (dispatch: React.Dispatch<any>) => {
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

export type Actions = ReturnType<typeof useActions>;
