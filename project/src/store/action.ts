import { ActionType } from '../types/action';
import { Offer } from '../types/offer';

const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
}) as const;

const getOffersByCity = (offers: Offer[]) => ({
  type: ActionType.GetOffersByCity,
  payload: offers,
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

export {
  changeCity,
  getOffersByCity,
  changeSortType,
  loadOffers
};
