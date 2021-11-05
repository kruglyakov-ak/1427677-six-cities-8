import { Actions, ActionType } from '../../types/action';
import { OfferData } from '../../types/state';

const initialState: OfferData = {
  offers: [],
  isDataLoaded: false,
  offer: null,
  nearbyOffers: [],
  comments: [],
  favoriteOffers: [],
};

const offerData = (state = initialState, action: Actions): OfferData => {
  switch (action.type) {
    case ActionType.LoadOffers: {
      const { offers } = action.payload;
      return { ...state, offers, isDataLoaded: true };
    }
    case ActionType.LoadOfferById: {
      const { offer } = action.payload;
      return { ...state, offer: offer };
    }
    case ActionType.LoadNearbyOffers: {
      const { nearbyOffers } = action.payload;
      return { ...state, nearbyOffers: nearbyOffers };
    }
    case ActionType.LoadComments: {
      const { comments } = action.payload;
      return { ...state, comments: comments };
    }
    case ActionType.LoadFavoriteOffers: {
      const { favoriteOffers } = action.payload;
      return { ...state, favoriteOffers: favoriteOffers };
    }
    default: {
      return state;
    }
  }
};

export { offerData };
