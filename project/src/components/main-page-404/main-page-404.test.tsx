import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import MainPage404 from './main-page-404';

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
});

describe('Component: MainPage404', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage404 />
        </Router>
      </Provider>);

    expect(screen.getByText(/You can go to the home page/i)).toBeInTheDocument();
  });

});
