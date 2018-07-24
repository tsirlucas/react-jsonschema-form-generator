import {$Values} from 'utility-types';

import {TActions as TSchemaActions} from 'src/core/schema';

export type TActions = TSchemaActions;

export type TActionsValues = $Values<TActions>;
