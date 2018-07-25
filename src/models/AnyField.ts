import {IDateField} from './DateField';
import {IGroup} from './Group';
import {IListField} from './ListField';
import {INumberField} from './NumberField';
import {ITextField} from './TextField';

export type TAnyField = IGroup | ITextField | INumberField | IDateField | IListField;
