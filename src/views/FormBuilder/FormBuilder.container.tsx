import * as React from 'react';
import {connect} from 'react-redux';
import {AddButton} from 'components';
import {TextInput} from 'components';
import {ISchema} from 'models';

import {AnyField} from './Fields';
import {
  mapDispatchToProps,
  mapStateToProps,
  TMapDispatchToProps,
  TMapStateToProps,
} from './FormBuilder.selectors';

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

  private create = (option: string) => () => {
    this.props.actions.addToSchema({path: ['properties'], element: option});
  };

  private createFromChild = (path: string[], option: string) => {
    const newPath = ['properties', ...path];
    this.props.actions.addToSchema({path: newPath, element: option});
  };

  private update = (value: string) => {
    this.props.actions.updateSchema({path: ['title'], value});
  };

  protected updateFromChild = (path: string[], value: string | number) => {
    const newPath = ['properties', ...path];
    this.props.actions.updateSchema({path: newPath, value});
  };

  protected removeFromChild = (path: string[]) => {
    const newPath = ['properties', ...path];
    this.props.actions.removeFromSchema(newPath);
    this.props.actions.setRequiredOnSchema({path: newPath, value: false});
  };

  protected setRequiredFromChild = (path: string[], value: boolean) => {
    const newPath = ['properties', ...path];
    this.props.actions.setRequiredOnSchema({path: newPath, value});
  };

  public render() {
    const {properties} = this.state.schema;
    const propertiesKeys = Object.keys(properties);
    return (
      <form>
        <TextInput label="Form title" value={this.state.schema.title} onChange={this.update} />
        {propertiesKeys.map((key) => (
          <AnyField
            key={key}
            elementKey={key}
            element={properties[key]}
            updateWithParentPath={this.updateFromChild}
            createWithParentPath={this.createFromChild}
            removeWithParentPath={this.removeFromChild}
            setRequiredWithParentPath={this.setRequiredFromChild}
          />
        ))}
        <AddButton onSelect={this.create} />
      </form>
    );
  }
}

export const FormBuilder = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormBuilderComponent);
