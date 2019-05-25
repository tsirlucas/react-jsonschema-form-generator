import React from 'react';
import {createContext, useReducer, useMemo, ReactNode} from 'react';

import {schema, initialState} from './schema.reducer';
import {useActions, Actions} from './schema.actions';

export const SchemaContext = createContext({state: initialState, actions: {} as Actions});

export const SchemaProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(schema, initialState);
  const actions = useActions(dispatch);

  const value = useMemo(
    () => ({
      state,
      actions,
    }),
    [state, actions],
  );

  return <SchemaContext.Provider value={value}>{children}</SchemaContext.Provider>;
};
