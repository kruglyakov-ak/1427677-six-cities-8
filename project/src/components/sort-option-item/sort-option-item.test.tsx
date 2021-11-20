import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { SortType } from '../../const';
import SortOptionItem from './sort-option-item';

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  OFFER: { currentSortType: SortType.LowToHighPrice },
});

describe('Component: SortOptionItem', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <SortOptionItem sortType={SortType.LowToHighPrice} />
      </Provider>);

    expect(screen.getByText(SortType.LowToHighPrice)).toBeInTheDocument();
  });
});
