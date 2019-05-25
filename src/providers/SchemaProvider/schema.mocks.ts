export const textMock = {
  class: 'text',
  type: 'string',
  title: 'Your title',
  description: '',
  minLength: 0,
  maxLength: 20,
};

export const numberMock = {
  class: 'number',
  type: 'number',
  title: 'Your title',
  description: '',
  minimum: 0,
  maximum: 1000,
};

export const dateMock = {
  class: 'date',
  type: 'string',
  title: 'Your title',
  description: '',
  format: 'date',
};

export const groupMock = {
  class: 'group',
  type: 'object',
  title: 'Your title',
  description: '',
  required: [],
  properties: {},
};

export const listMock = {
  class: 'list',
  type: 'array',
  title: 'Your title',
  description: '',
  items: {},
  minItems: 0,
  maxItems: 20,
};
