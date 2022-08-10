import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {legacy_createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/App';
import {reducer} from './store/reducer';

const store = legacy_createStore(
    reducer,
    composeWithDevTools()
);

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
    <Provider store={store}>
      <App
      />
    </Provider>);
