import * as React from 'react';
import {Col, Grid} from 'react-bootstrap';
import {Provider} from 'react-redux';
import {store} from 'core/store';

import '../App.css';
import {FormBuilder} from './FormBuilder';
import {FormPreview} from './FormPreview';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Grid className="mg-t-xl mg-b-xl">
        <Col xs={12} md={6} className="m-b-md">
          <legend>Your Builder</legend>
          <FormBuilder />
        </Col>
        <Col xs={12} md={6}>
          <FormPreview />
        </Col>
      </Grid>
    </Provider>
  </div>
);

export default App;
