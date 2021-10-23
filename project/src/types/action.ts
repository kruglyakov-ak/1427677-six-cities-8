enum ActionType {
  ChangeCity = 'changeCity',
  GetOffers = 'getOffers',
}

type ChangeCityAction = {
  type: ActionType.ChangeCity;
};

type GetOffersAction = {
  type: ActionType.GetOffers;
};

type Actions = ChangeCityAction | GetOffersAction;

export {
  ActionType
};

export type {
  Actions,
  ChangeCityAction,
  GetOffersAction
};
