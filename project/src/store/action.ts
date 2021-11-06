import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

const changeCity = createAction(
  ActionType.ChangeCity,
  (city: string) => ({
    payload: city,
  }),
);

const changeSortType = createAction(
  ActionType.ChangeSortType,
  (type: string) => ({
    payload: type,
  }),
);

const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

const loadOfferById = createAction(
  ActionType.LoadOfferById,
  (offer: Offer) => ({
    payload: {
      offer,
    },
  }),
);

const loadNearbyOffers = createAction(
  ActionType.LoadNearbyOffers,
  (nearbyOffers: Offer[]) => ({
    payload: {
      nearbyOffers,
    },
  }),
);

const loadComments = createAction(
  ActionType.LoadComments,
  (comments: Review[]) => ({
    payload: {
      comments,
    },
  }),
);

const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

const requireLogout = createAction(
  ActionType.RequireLogout,
);

const getCurrentLogin = createAction(
  ActionType.GetCurrentLogin,
  (login: string) => ({
    payload: login,
  }),
);

const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: string) => ({
    payload: url,
  }),
);

const loadFavoriteOffers = createAction(
  ActionType.LoadFavoriteOffers,
  (favoriteOffers: Offer[]) => ({
    payload: {
      favoriteOffers,
    },
  }),
);

export {
  changeCity,
  changeSortType,
  loadOffers,
  requireAuthorization,
  requireLogout,
  getCurrentLogin,
  loadOfferById,
  redirectToRoute,
  loadNearbyOffers,
  loadComments,
  loadFavoriteOffers
};
