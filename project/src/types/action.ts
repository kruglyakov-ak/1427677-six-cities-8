import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';
import {
  changeCity,
  getOffersByCity,
  changeSortType,
  loadOffers,
  requireAuthorization
} from '../store/action';

enum ActionType {
  ChangeCity = 'offer/changeCity',
  GetOffersByCity = 'offer/getOffersByCity',
  ChangeSortType = 'offer/changeSortType',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
}

type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof getOffersByCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>;


type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {
  ActionType
};

export type {
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
