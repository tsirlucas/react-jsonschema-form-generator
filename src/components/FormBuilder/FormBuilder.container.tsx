import * as React from 'react';
import {FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {AddButton} from 'src/components/AddButton';
import {AnyField} from 'src/components/FormBuilder/Fields';
import {
  mapDispatchToProps,
  mapStateToProps,
  TMapDispatchToProps,
  TMapStateToProps,
} from 'src/components/FormBuilder/FormBuilder.selectors';
import {TitleInput} from 'src/components/TitleInput';
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

  protected handleChangesFromChild = (path: string[], value: string | number) => {
    const newPath = ['properties', ...path];
    this.props.actions.updateSchema({path: newPath, value});
  };

  private onAdd = (option: string) => () => {
    this.props.actions.addToSchema({path: ['properties'], element: option});
  };

  public render() {
    const {properties} = this.state.schema;
    const propertiesKeys = Object.keys(properties);
    return (
      <form>
        <TitleInput
          label="Title input"
          value={this.state.schema.title}
          onChange={this.handleChange}
        />
        {propertiesKeys.map((key) => (
          <AnyField
            key={key}
            elementKey={key}
            element={properties[key]}
            updateWithParentPath={this.handleChangesFromChild}
          />
        ))}
        <AddButton onSelect={this.onAdd} />
      </form>
    );
  }
}

export const FormBuilder = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormBuilderComponent);
