import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import thunk, { ThunkDispatch } from 'redux-thunk';
import CitysList from './citys-list';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { City } from '../../const';
import { Provider } from 'react-redux';

const onFakeUnauthorized = jest.fn();
const history = createMemoryHistory();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);
const store = mockStore({
  OFFER: { currentCity: City.Paris },
});

describe('Component: cityList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CitysList />
        </Router>
      </Provider>);

    Object.keys(City).map((city) => expect(screen.getByText(city)).toBeInTheDocument());
  });
});
