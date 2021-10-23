import { Citys } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  city: Citys.Amsterdam,
  offers: null,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: state.city };
    case ActionType.GetOffersByCity: {
      if (!action.payload) {
        return { ...state, offers: null };
      }
      return { ...state, offers: action.payload.filter((offer) => offer.cityName === state.city) };
    }
    default:
      return state;
  }
};

export { reducer };
