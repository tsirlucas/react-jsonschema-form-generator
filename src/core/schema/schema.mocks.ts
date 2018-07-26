import {List, Map} from 'immutable';

export const group = {
  class: 'group',
  type: 'object',
  title: 'Your title',
  required: List([]),
  properties: Map({}),
};

export const list = {
  class: 'list',
  type: 'array',
  title: 'Your title',
  items: Map({}),
  minItems: 0,
  maxItems: 20,
};

export const text = {
  class: 'text',
  type: 'string',
  title: 'Your title',
  minLength: 0,
  maxLength: 20,
};
