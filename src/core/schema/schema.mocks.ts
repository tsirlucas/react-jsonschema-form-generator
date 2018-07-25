import {Map} from 'immutable';

export const group = {
  class: 'group',
  type: 'object',
  title: 'Your title',
  properties: Map({}),
};

export const list = {
  class: 'list',
  type: 'array',
  title: 'Your title',
  items: Map({}),
};

export const text = {
  class: 'text',
  type: 'string',
  title: 'Your title',
  maxLength: 100,
};
