import * as React from 'react';
import {Col, Grid} from 'react-bootstrap';
import {Provider} from 'react-redux';
import {FormBuilder, FormPreview} from 'src/components';
import {store} from 'src/core/store';

import '../App.css';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Grid>
        <Col xs={12} md={6}>
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
