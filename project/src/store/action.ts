import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
}) as const;

const changeSortType = (type: string) => ({
  type: ActionType.ChangeSortType,
  payload: type,
}) as const;

const loadOffers = (offers: Offer[]) => ({
  type: ActionType.LoadOffers,
  payload: {
    offers,
  },
}) as const;

const loadOfferById = (offer: Offer) => ({
  type: ActionType.LoadOfferById,
  payload: {
    offer,
  },
}) as const;

const loadNearbyOffers = (nearbyOffers: Offer[]) => ({
  type: ActionType.LoadNearbyOffers,
  payload: {
    nearbyOffers,
  },
}) as const;

const loadComments = (comments: Review[]) => ({
  type: ActionType.LoadComments,
  payload: {
    comments,
  },
}) as const;

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

const getCurrentLogin = (login: string) => ({
  type: ActionType.GetCurrentLogin,
  payload: login,
} as const);

const redirectToRoute = (url: string) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

const loadFavoriteOffers = (favoriteOffers: Offer[]) => ({
  type: ActionType.LoadFavoriteOffers,
  payload: {
    favoriteOffers,
  },
} as const);

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
