import {TAnyField} from 'src/models/AnyField';
import {IField} from 'src/models/Field';

export interface ISchema extends IField {
  type: 'object';
  required: string[];
  properties: {
    [index: string]: TAnyField;
  };
}
