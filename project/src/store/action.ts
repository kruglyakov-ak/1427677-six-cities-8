import {ActionType, ChangeCityAction, GetOffersByCityAction} from '../types/action';
import { Offer } from '../types/offer';

export const ChangeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const GetOffersByCity = (offers: Offer[]): GetOffersByCityAction => ({
  type: ActionType.GetOffersByCity,
  payload: offers,
});
