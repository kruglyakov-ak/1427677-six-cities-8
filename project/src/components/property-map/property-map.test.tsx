import { render, screen } from '@testing-library/react';
import { makeFakeOffers } from '../../utils/moks';
import PropertyMap from './property-map';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';

const history = createMemoryHistory();
const mockOffers = makeFakeOffers().slice(0, 1);
const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  DATA: { offer: mockOffers[0], nearbyOffers: mockOffers },
});

describe('Component: PropertyMap', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyMap />
        </Router>
      </Provider>);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

});
