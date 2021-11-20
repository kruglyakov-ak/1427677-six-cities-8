import { Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { makeFakeOffers } from '../../utils/moks';
import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import FavoritesOffersLst from './favorites-offers-list';

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
});

describe('Component: FavoritesOffersLst', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesOffersLst location={mockOffers[0].cityName} />
        </Router>
      </Provider>);

    expect(screen.getByText(mockOffers[0].cityName)).toBeInTheDocument();
  });

  it('should redirect to / url when user clicked to link', () => {
    history.push('/fake');
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={AppRoute.Main} exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <FavoritesOffersLst location={mockOffers[0].cityName} />
            </Route>
          </Switch>
        </Router>
      </Provider>);


    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText(mockOffers[0].cityName));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });

});
