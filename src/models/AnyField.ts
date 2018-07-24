import {IDateField} from 'src/models/DateField';
import {IGroup} from 'src/models/Group';
import {IListField} from 'src/models/ListField';
import {INumberField} from 'src/models/NumberField';
import {ITextField} from 'src/models/TextField';

export type TAnyField = IGroup | ITextField | INumberField | IDateField | IListField
