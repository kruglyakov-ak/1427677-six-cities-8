import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { city } from './mocks/city';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
      city={city}
    />
  </React.StrictMode>,
  document.getElementById('root'));
