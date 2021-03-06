import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { AuthorizationStatus, SortType } from '../../const';
import MainPage from './main-page';
import { makeFakeOffers } from '../../utils/moks';

const mockOffers = makeFakeOffers();
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
  OFFER: { currentSortType: SortType.TopRated, currentCity: mockOffers[0].cityName},
  DATA: { offers: mockOffers },
});

describe('Component: MainPage', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>);

    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByText(mockOffers[0].title)).toBeInTheDocument();
  });

});
