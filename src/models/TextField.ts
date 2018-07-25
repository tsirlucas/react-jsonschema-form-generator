import {IField} from './Field';

export interface ITextField extends IField {
  type: 'string';
  maxLength: number;
}
