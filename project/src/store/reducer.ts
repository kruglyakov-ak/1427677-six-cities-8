import { Citys } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  city: Citys.Paris,
  offers: null,
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: state.city };
    case ActionType.GetOffers:
      return { ...state, offers: state.offers };
    default:
      return state;
  }
};

export { reducer };
