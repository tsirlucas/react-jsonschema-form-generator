import * as React from 'react';
import Form from 'react-jsonschema-form';
import {connect} from 'react-redux';
import {
  mapDispatchToProps,
  mapStateToProps,
  TMapDispatchToProps,
  TMapStateToProps,
} from 'src/components/FormPreview/FormPreview.selectors';
import {ISchema} from 'src/models';

type TProps = TMapStateToProps & TMapDispatchToProps;
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

export const FormPreview = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormPreviewComponent);
