import {IField} from './Field';

export interface IDateField extends IField {
  type: 'string';
  format: 'date';
}
