import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { Offer } from '../types/offer';

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

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export {
  changeCity,
  changeSortType,
  loadOffers,
  requireAuthorization,
  requireLogout
};
