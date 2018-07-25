import {Action, bindActionCreators, Dispatch} from 'redux';

import {actions as schemaActions, RootState} from 'core';

export const mapStateToProps = ({schema}: RootState) => ({
  schema,
});

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  actions: bindActionCreators(
    {
      updateSchema: schemaActions.updateSchema,
      addToSchema: schemaActions.addToSchema,
      removeFromSchema: schemaActions.removeFromSchema,
    },
    dispatch,
  ),
});

export type TMapDispatchToProps = ReturnType<typeof mapDispatchToProps>;
export type TMapStateToProps = ReturnType<typeof mapStateToProps>;
