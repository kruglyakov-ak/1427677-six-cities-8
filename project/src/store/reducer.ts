import { City, SortType } from '../const';
import { offers } from '../mocks/offers';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState: State = {
  currentCity: City.Paris,
  offers: offers,
  offersByCity: offers.filter((offer) => offer.cityName === City.Paris),
  currentSortType: SortType.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity: {
      return { ...state, currentCity: action.payload };
    }
    case ActionType.GetOffersByCity: {
      return { ...state, offersByCity: action.payload.filter((offer) => offer.cityName === state.currentCity) };
    }
    case ActionType.ChangeSortType: {
      switch (action.payload) {
        case SortType.LowToHighPrice: {
          return { ...state, offersByCity: state.offersByCity.sort((prev, next) => next.price - prev.price) };
        }
        case SortType.HighToLowPrice: {
          return { ...state, offersByCity: state.offersByCity.sort((prev, next) => prev.price - next.price) };
        }
        case SortType.TopRated: {
          return { ...state, offersByCity: state.offersByCity.sort((prev, next) => prev.rating - next.rating) };
        }
        default:
          return { ...state, offersByCity: state.offers.filter((offer) => offer.cityName === state.currentCity) };
      }
      break;
    }
    default:
      return state;
  }
};

export { reducer };
