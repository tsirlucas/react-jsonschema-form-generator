import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from 'src/registerServiceWorker';
import App from 'src/views/App';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
