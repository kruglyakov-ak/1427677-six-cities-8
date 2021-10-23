import {ActionType, ChangeCityAction, GetOffersByCityAction} from '../types/action';
import { Offer } from '../types/offer';

export const ChangeCity = (): ChangeCityAction => ({
  type: ActionType.ChangeCity,
});

export const GetOffersByCity = (offers: Offer[] | null): GetOffersByCityAction => ({
  type: ActionType.GetOffersByCity,
  payload: offers,
});
