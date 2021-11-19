import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { makeFakeOffers } from '../../utils/moks';
import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import FavoritesScreen from './favorites-screen';
import { AuthorizationStatus } from '../../const';

const history = createMemoryHistory();
const mockOffers = makeFakeOffers();
const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  DATA: { offer: mockOffers[0], favoriteOffers: mockOffers },
  USER: { authorizationStatus: AuthorizationStatus.Auth },
});

describe('Component: FavoritesScreen', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesScreen />
        </Router>
      </Provider>);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

});
