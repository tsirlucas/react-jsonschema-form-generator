import {IField} from './Field';

export interface ITextField extends IField {
  type: 'string';
  minLength: number;
  maxLength: number;
}
