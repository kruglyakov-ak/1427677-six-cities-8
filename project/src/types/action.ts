import { Offer } from './offer';

enum ActionType {
  ChangeCity = 'changeCity',
  GetOffersByCity = 'getOffersByCity',
}

type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: string;
};

type GetOffersByCityAction = {
  type: ActionType.GetOffersByCity;
  payload: Offer[],
};

type Actions = ChangeCityAction | GetOffersByCityAction;

export {
  ActionType
};

export type {
  Actions,
  ChangeCityAction,
  GetOffersByCityAction
};
