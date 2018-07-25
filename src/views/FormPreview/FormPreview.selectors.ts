import {RootState} from 'core';

export const mapStateToProps = ({schema}: RootState) => ({
  schema,
});

export type TMapStateToProps = ReturnType<typeof mapStateToProps>;
