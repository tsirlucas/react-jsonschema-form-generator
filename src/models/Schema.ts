import {TAnyField} from './AnyField';
import {IField} from './Field';

export interface ISchema extends IField {
  type: 'object';
  required: string[];
  properties: {
    [index: string]: TAnyField;
  };
}
