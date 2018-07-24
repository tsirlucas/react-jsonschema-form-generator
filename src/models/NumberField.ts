import {IField} from 'src/models/Field';

export interface INumberField extends IField {
  type: 'number';
  minimum: number;
  maximum: number;
}
