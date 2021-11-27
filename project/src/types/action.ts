import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from './state';

enum ActionType {
  ChangeCity = 'offer/changeCity',
  ChangeSortType = 'offer/changeSortType',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  GetCurrentLogin = 'user/getCurrentLogin',
  LoadOffers = 'data/loadOffers',
  LoadOfferById = 'data/loadOfferById',
  RedirectToRoute = 'offer/redirectToRoute',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  LoadComments = 'data/loadComments',
  LoadFavoriteOffers = 'data/loadFavoriteOffers',
  ChangeOferFavoriteStatus = 'data/changeOferFavoriteStatus'
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export {
  ActionType
};

export type {
  ThunkActionResult
};
