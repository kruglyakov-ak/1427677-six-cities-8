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
import { AppRoute, AuthorizationStatus } from '../../const';
import PlaceCard from './place-card';

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
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  DATA: { offer: mockOffers[0] },
});

describe('Component: PlaceCard', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <PlaceCard offer={mockOffers[0]} />
        </Router>
      </Provider>);

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
              <PlaceCard offer={mockOffers[0]} />
            </Route>
          </Switch>
        </Router>
      </Provider>);


    expect(screen.queryByText(/This is offer card/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByAltText('Place card'));
    expect(screen.queryByText(/This is offer card/i)).toBeInTheDocument();
  });

});
