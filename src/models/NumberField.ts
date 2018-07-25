import {IField} from './Field';

export interface INumberField extends IField {
  type: 'number';
  minimum: number;
  maximum: number;
}
