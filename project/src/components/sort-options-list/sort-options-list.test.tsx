import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { SortType } from '../../const';
import SortOptionsList from './sort-options-list';

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

describe('Component: SortOptionsList', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <SortOptionsList isSortOptionsOpen={false} />
      </Provider>);

    expect(screen.getByText(SortType.Popular)).toBeInTheDocument();
    expect(screen.getByText(SortType.HighToLowPrice)).toBeInTheDocument();
    expect(screen.getByText(SortType.LowToHighPrice)).toBeInTheDocument();
    expect(screen.getByText(SortType.TopRated)).toBeInTheDocument();
  });
});
