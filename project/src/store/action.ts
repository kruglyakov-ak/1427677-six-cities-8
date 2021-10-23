import {ActionType, ChangeCityAction, GetOffersAction} from '../types/action';

export const ChangeCity = (): ChangeCityAction => ({
  type: ActionType.ChangeCity,
});

export const GetOffers = (): GetOffersAction => ({
  type: ActionType.GetOffers,
});
