import { City, SortType } from '../../const';
import { Actions, ActionType } from '../../types/action';
import { OfferProperty } from '../../types/state';

const initialState: OfferProperty = {
  currentCity: City.Paris,
  currentSortType: SortType.Popular,
};

const offerProperty = (state = initialState, action: Actions): OfferProperty => {
  switch (action.type) {
    case ActionType.ChangeCity: {
      return { ...state, currentCity: action.payload };
    }
    case ActionType.ChangeSortType: {
      return { ...state, currentSortType: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { offerProperty };
