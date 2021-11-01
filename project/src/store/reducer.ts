import { AuthorizationStatus, City, SortType } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState: State = {
  currentCity: City.Paris,
  offers: [],
  currentSortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  currentLogin: '',
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity: {
      return { ...state, currentCity: action.payload };
    }
    case ActionType.ChangeSortType: {
      return { ...state, currentSortType: action.payload };
    }
    case ActionType.LoadOffers: {
      const { offers } = action.payload;
      return { ...state, offers };
    }
    case ActionType.LoadOfferById: {
      const { offer } = action.payload;
      return { ...state, offer: offer};
    }
    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.RequireLogout: {
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    }
    case ActionType.GetCurrentLogin: {
      return { ...state, currentLogin: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
