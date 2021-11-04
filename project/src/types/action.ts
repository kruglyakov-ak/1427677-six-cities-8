import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';
import {
  changeCity,
  changeSortType,
  getCurrentLogin,
  loadComments,
  loadNearbyOffers,
  loadOfferById,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  requireLogout
} from '../store/action';

enum ActionType {
  ChangeCity = 'offer/changeCity',
  ChangeSortType = 'offer/changeSortType',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  GetCurrentLogin = 'user/getCurrentLogin',
  LoadOfferById = 'data/loadOfferById',
  RedirectToRoute = 'offer/redirectToRoute',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  LoadComments = 'data/loadComments'
}

type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof getCurrentLogin>
  | ReturnType<typeof loadOfferById>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof loadNearbyOffers>
  | ReturnType<typeof loadComments>;


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
