import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { City } from '../../const';
import { Provider } from 'react-redux';
import CityItem from './city-item';
import userEvent from '@testing-library/user-event';
import { changeCity } from '../../store/action';

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
const mockCity = City.Amsterdam;


describe('Component: cityItem', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CityItem city={mockCity} />
        </Router>
      </Provider>);

    expect(screen.getByText(mockCity)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should change currentCity when user clicked to link', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CityItem city={mockCity} />
        </Router>
      </Provider>);

    userEvent.click(screen.getByRole('link'));
    expect(store.getActions()).toEqual([changeCity(mockCity)]);
  });
});
