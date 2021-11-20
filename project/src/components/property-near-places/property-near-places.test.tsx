import { render, screen } from '@testing-library/react';
import { makeFakeOffers } from '../../utils/moks';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import PropertyNearPlaces from './property-near-places';
import { AppRoute, AuthorizationStatus } from '../../const';
import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockOffers = makeFakeOffers().slice(0, 1);
const history = createMemoryHistory();
const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  DATA: { nearbyOffers: mockOffers },
});

describe('Component: PropertyMap', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyNearPlaces />
        </Router>
      </Provider>);

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByText(mockOffers[0].title)).toBeInTheDocument();
  });

  it('should redirect to offer/:id url when user clicked to link', () => {
    history.push('/fake');
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={AppRoute.Offer} exact>
              <h1>This is offer card</h1>
            </Route>
            <Route>
              <PropertyNearPlaces />
            </Route>
          </Switch>
        </Router>
      </Provider>);


    expect(screen.queryByText(/This is offer card/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByAltText('Place card'));
    expect(screen.queryByText(/This is offer card/i)).toBeInTheDocument();
  });

});
