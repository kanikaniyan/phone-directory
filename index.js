import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />,
  document.getElementsByClassName("options-main-container")[0]
);

serviceWorker.unregister();
