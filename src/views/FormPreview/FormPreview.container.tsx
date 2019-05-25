import React from 'react';
import {useContext} from 'react';
import Form from 'react-jsonschema-form';
import {SchemaContext} from 'providers';

export const FormPreview = () => {
  const {state} = useContext(SchemaContext);

  return <Form liveValidate={true} schema={state} />;
};
