import { ActionType, ChangeCityAction, GetOffersByCityAction } from '../types/action';
import { Offer } from '../types/offer';

const ChangeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

const GetOffersByCity = (offers: Offer[]): GetOffersByCityAction => ({
  type: ActionType.GetOffersByCity,
  payload: offers,
});

export {
  ChangeCity,
  GetOffersByCity
};
