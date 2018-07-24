import {TAnyField} from 'src/models/AnyField';
import {IField} from 'src/models/Field';

export interface IListField extends IField {
  type: 'array';
  minItems: number;
  maxItems: number;
  items: TAnyField;
}
