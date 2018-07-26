import * as React from 'react';
import Form from 'react-jsonschema-form';
import {connect} from 'react-redux';
import {ISchema} from 'models';

import {mapStateToProps, TMapStateToProps} from './FormPreview.selectors';

type TProps = TMapStateToProps;
interface IState {
  schema: ISchema;
}

class FormPreviewComponent extends React.Component<TProps, IState> {
  public state = {
    schema: {} as ISchema,
  };

  public static getDerivedStateFromProps(nextProps: TProps) {
    return {schema: nextProps.schema.toJS()};
  }

  public render() {
    return <Form schema={this.state.schema} />;
  }
}

export const FormPreview = connect(mapStateToProps)(FormPreviewComponent);
