import { Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import FavoritePlaceCard from './favorite-place-card';
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

const history = createMemoryHistory();
const mockOffer = makeFakeOffers()[0];
const changeFavoriteMockOffer = mockOffer;
changeFavoriteMockOffer.isFavorite = !mockOffer.isFavorite;
const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  DATA: { offer: mockOffer },
});

describe('Component: FavoritePlaceCard', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritePlaceCard offer={mockOffer} />
        </Router>
      </Provider>);

    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
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
              <FavoritePlaceCard offer={mockOffer} />
            </Route>
          </Switch>
        </Router>
      </Provider>);


    expect(screen.queryByText(/This is offer card/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByAltText('Place card'));
    expect(screen.queryByText(/This is offer card/i)).toBeInTheDocument();
  });

});
