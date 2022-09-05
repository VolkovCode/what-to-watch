import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import {reducer} from './store/reducer';
import {createAPI} from './api/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './data/constants';
import App from './components/app/app.jsx';


const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

// store.dispatch(checkAuth());

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
    <Provider store={store}>
      <App/>
    </Provider>);
