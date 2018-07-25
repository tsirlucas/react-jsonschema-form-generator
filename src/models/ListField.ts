import {TAnyField} from './AnyField';
import {IField} from './Field';

export interface IListField extends IField {
  type: 'array';
  minItems: number;
  maxItems: number;
  items: TAnyField;
}
