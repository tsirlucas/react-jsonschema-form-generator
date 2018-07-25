import {TAnyField} from './AnyField';
import {IField} from './Field';

export interface ISchema extends IField {
  type: 'object';
  properties: {
    [index: string]: TAnyField;
  };
}
