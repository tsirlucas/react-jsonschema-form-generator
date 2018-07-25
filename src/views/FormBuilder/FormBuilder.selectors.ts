import {Action, bindActionCreators, Dispatch} from 'redux';

import {actions as schemaActions, RootState} from 'core';

export const mapStateToProps = ({schema}: RootState) => ({
  schema,
});

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  actions: bindActionCreators(schemaActions, dispatch),
});

export type TMapDispatchToProps = ReturnType<typeof mapDispatchToProps>;
export type TMapStateToProps = ReturnType<typeof mapStateToProps>;
