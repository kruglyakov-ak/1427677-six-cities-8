import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={store.getState().offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
