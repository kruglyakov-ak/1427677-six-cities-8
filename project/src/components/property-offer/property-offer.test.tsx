import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { makeFakeOffers, makeFakeReviews } from '../../utils/moks';
import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import PropertyOffer from './property-offer';

const history = createMemoryHistory();
const mockOffers = makeFakeOffers();
const mockComments = makeFakeReviews().slice(0, 1);
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
  DATA: { offer: mockOffers[0], comments: mockComments, nearbyOffers: mockOffers.slice(1, 2)},
});

describe('Component: PropertyOffer', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyOffer />
        </Router>
      </Provider>);

    expect(screen.getByText(mockOffers[0].title)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
