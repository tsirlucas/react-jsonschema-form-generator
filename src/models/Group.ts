import {TAnyField} from 'src/models/AnyField';

export interface IGroup {
  type: 'object';
  title: string;
  properties: {
    [index: string]: TAnyField;
  };
}
