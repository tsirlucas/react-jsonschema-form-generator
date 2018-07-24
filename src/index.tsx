import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from 'src/registerServiceWorker';
import App from 'src/views/App';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
