import { AxiosInstance } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from './state';
import {
  changeCity,
  getOffersByCity,
  changeSortType,
  loadOffers
} from '../store/action';

enum ActionType {
  ChangeCity = 'offer/changeCity',
  GetOffersByCity = 'offer/getOffersByCity',
  ChangeSortType = 'offer/changeSortType',
  LoadOffers = 'data/loadOffers'
}

type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof getOffersByCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof loadOffers>;


type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export {
  ActionType
};

export type {
  Actions,
  ThunkActionResult
};
