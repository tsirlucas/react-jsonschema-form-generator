import {Map} from 'immutable';

export const group = {
  type: 'object',
  title: 'Your title',
  properties: Map({}),
};

export const text = {
  type: 'string',
  title: 'Your title',
  maxLength: 100,
};
