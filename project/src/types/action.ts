import { Offer } from './offer';

enum ActionType {
  ChangeCity = 'changeCity',
  GetOffersByCity = 'getOffersByCity',
}

type ChangeCityAction = {
  type: ActionType.ChangeCity;
};

type GetOffersByCityAction = {
  type: ActionType.GetOffersByCity;
  payload: Offer[] | null,
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
