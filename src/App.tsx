import React from 'react';
import {Col, Grid} from 'react-bootstrap';
import {SchemaProvider} from 'providers';

import './App.css';
import {FormBuilder, FormPreview} from './views';

const App = () => (
  <div className="App">
    <SchemaProvider>
      <Grid className="mg-t-xl mg-b-xl">
        <Col xs={12} md={6} className="m-b-md">
          <legend>Your Builder</legend>
          <FormBuilder />
        </Col>
        <Col xs={12} md={6}>
          <FormPreview />
        </Col>
      </Grid>
    </SchemaProvider>
  </div>
);

export default App;
