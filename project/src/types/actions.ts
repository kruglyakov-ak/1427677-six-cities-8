enum ActionType {
  ChangeCity = 'changeCity',
  GetOffers = 'getOffers',
}

type ChangeCity = {
  type: ActionType.ChangeCity;
  payload: number;
};

type GetOffers = {
  type: ActionType.GetOffers;
};

type Actions = ChangeCity | GetOffers;

export {
  ActionType
};

export type {
  Actions,
  ChangeCity,
  GetOffers
};
