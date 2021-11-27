import { render, screen } from '@testing-library/react';
import { makeFakeOffers, makeFakeReviews } from '../../utils/moks';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import PropertyScreen from './property-screen';

const mockOffers = makeFakeOffers();
const mockComments = makeFakeReviews().slice(0, 1);
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
  DATA: { nearbyOffers: mockOffers.slice(1, 2), offer: mockOffers[0], comments: mockComments },
});

describe('Component: PropertyScreen', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyScreen />
        </Router>
      </Provider>);

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(screen.getByText(mockOffers[0].title)).toBeInTheDocument();
  });

});
