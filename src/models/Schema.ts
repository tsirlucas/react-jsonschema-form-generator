import {IField} from 'src/models/Field';

export interface ISchema {
  type: 'object';
  title: string;
  [index: string]: IField;
}
