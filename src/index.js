import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './containers/app'
import registerServiceWorker from './registerServiceWorker';

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(  
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>, root);
  registerServiceWorker();
}
