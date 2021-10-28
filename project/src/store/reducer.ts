import { City, SortType } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState: State = {
  currentCity: City.Paris,
  offers: [],
  offersByCity: [],
  currentSortType: SortType.Popular,
  isDataLoaded: false,
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
      return { ...state, currentSortType: action.payload };
    }
    default:{
      return state;
    }
  }
};

export { reducer };
