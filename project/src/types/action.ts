import { Offer } from './offer';

enum ActionType {
  ChangeCity = 'changeCity',
  GetOffersByCity = 'getOffersByCity',
  ChangeSortType = 'changeSortType'
}

type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
};

type GetOffersByCityAction = {
  type: ActionType.GetOffersByCity,
  payload: Offer[],
};

type ChangeSortTypeAction = {
  type: ActionType.ChangeSortType,
  payload: string,
}

type Actions = ChangeCityAction | GetOffersByCityAction | ChangeSortTypeAction;

export {
  ActionType
};

export type {
  Actions,
  ChangeCityAction,
  GetOffersByCityAction,
  ChangeSortTypeAction
};
