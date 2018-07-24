import {IField} from 'src/models/Field';

export interface ITextField extends IField {
  type: 'string';
  maxLength: number;
}
