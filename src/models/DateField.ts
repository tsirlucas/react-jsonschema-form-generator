import {IField} from 'src/models/Field';

export interface IDateField extends IField {
  type: 'string';
  format: 'date';
}
