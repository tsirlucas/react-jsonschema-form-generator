import {Map} from 'immutable';

export const group = {
  class: 'group',
  type: 'object',
  title: 'Your title',
  properties: Map({}),
};

export const text = {
  class: 'text',
  type: 'string',
  title: 'Your title',
  maxLength: 100,
};
