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
import { AuthorizationStatus } from '../../const';
import LoginScreen from './login-screen';

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

describe('Component: LoginScreen', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginScreen />
        </Router>
      </Provider>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

});
