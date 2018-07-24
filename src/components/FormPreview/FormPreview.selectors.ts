import {Action, bindActionCreators, Dispatch} from 'redux';

import {RootState} from 'src/core';

// import {actions as schemaActions} from 'core/schema';

export const mapStateToProps = ({schema}: RootState) => ({
  schema,
});

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  actions: bindActionCreators({}, dispatch),
});

export type TMapDispatchToProps = ReturnType<typeof mapDispatchToProps>;
export type TMapStateToProps = ReturnType<typeof mapStateToProps>;
