import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACE_CARD_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placeCardCount={Setting.PLACE_CARD_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
