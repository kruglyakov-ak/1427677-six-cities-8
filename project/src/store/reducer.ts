import { City } from '../const';
import { offers } from '../mocks/offers';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState: State = {
  currentCity: City.Paris,
  offers: offers,
  offersByCity: offers.filter((offer) => offer.cityName === City.Paris),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity: {
      return { ...state, currentCity: action.payload };
    }
    case ActionType.GetOffersByCity: {
      return { ...state, offersByCity: action.payload.filter((offer) => offer.cityName === state.currentCity) };
    }
    default:
      return state;
  }
};

export { reducer };
