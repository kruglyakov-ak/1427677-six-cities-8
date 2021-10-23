import { Citys } from '../const';
import { offers } from '../mocks/offers';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState: State = {
  currentCity: Citys.Amsterdam,
  offers: offers,
  offersByCity: offers.filter((offer) => offer.cityName === Citys.Amsterdam),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, currentCity: state.currentCity };
    case ActionType.GetOffersByCity: {
      if (!action.payload) {
        return { ...state, offers: null };
      }
      return { ...state, offers: action.payload.filter((offer) => offer.cityName === state.currentCity) };
    }
    default:
      return state;
  }
};

export { reducer };
