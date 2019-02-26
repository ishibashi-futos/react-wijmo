import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Guage from './Guage';
import Grid from './Grid';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <Guage />,
  <Grid />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
