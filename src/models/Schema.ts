import {TAnyField} from 'src/models/AnyField';

export interface ISchema {
  type: 'object';
  title: string;
  properties: {
    [index: string]: TAnyField;
  };
}
