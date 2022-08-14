import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {legacy_createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import App from './components/app/App';
import {reducer} from './store/reducer';
import {createAPI} from './api/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './data/constants';
import {checkAuth} from './store/api-actions';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = legacy_createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
    <Provider store={store}>
      <App
      />
    </Provider>);
