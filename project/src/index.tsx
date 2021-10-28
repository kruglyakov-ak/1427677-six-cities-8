import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createAPI } from './services/api/api';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={store.getState().offers}
        offersByCity={store.getState().offersByCity}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
