import * as React from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {
  mapDispatchToProps,
  mapStateToProps,
  TMapDispatchToProps,
  TMapStateToProps,
} from 'src/components/FormBuilder/FormBuilder.selectors';
import {ISchema} from 'src/models';

type TProps = TMapStateToProps & TMapDispatchToProps;
interface IState {
  schema: ISchema;
}

class FormBuilderComponent extends React.Component<TProps, IState> {
  public state = {
    schema: {} as ISchema,
  };

  public static getDerivedStateFromProps(nextProps: TProps) {
    return {schema: nextProps.schema.toJS()};
  }

  private handleChange = (e: React.FormEvent<FormControl>) => {
    const value = (e.target as HTMLTextAreaElement).value;
    this.props.actions.updateSchema({path: ['title'], value});
  };

  public render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Form title</ControlLabel>
          <FormControl type="text" value={this.state.schema.title} onChange={this.handleChange} />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

export const FormBuilder = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormBuilderComponent);
