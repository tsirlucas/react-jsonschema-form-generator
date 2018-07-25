import {Field} from './Field';

export class Grouper extends Field {
  protected keyPaths = [] as string[];

  protected getPath = () => {
    return [this.props.elementKey, ...this.keyPaths];
  };

  protected create = (option: string) => () => {
    this.props.createWithParentPath(this.getPath(), option);
  };

  protected createWithChildValue = (path: string[], option: string) => {
    const newPath = [...this.getPath(), ...path];
    this.props.createWithParentPath(newPath, option);
  };

  protected updateWithChildValue = (path: string[], value: string | number) => {
    const newPath = [...this.getPath(), ...path];
    this.props.updateWithParentPath(newPath, value);
  };

  protected removeWithChildValue = (path: string[]) => {
    const newPath = [...this.getPath(), ...path];
    this.props.removeWithParentPath(newPath);
  };

  protected setRequiredWithChildValue = (path: string[], value: boolean) => {
    const newPath = [...this.getPath(), ...path];
    this.props.setRequiredWithParentPath(newPath, value);
  };
}
