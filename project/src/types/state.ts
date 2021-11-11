import { AuthorizationStatus, SortType } from '../const';
import { RootState } from '../store/root-reducer';
import { Offer } from './offer';
import { Review } from './review';

type State = RootState;

type OfferProperty = {
    currentCity: string
    currentSortType: SortType,
}

type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  currentLogin: string,
};

type OfferData = {
  offers: Offer[],
  isDataLoaded: boolean,
  offer: Offer | null,
  nearbyOffers: Offer[],
  comments: Review[],
  favoriteOffers: Offer[],
};

export type {
  State,
  OfferProperty,
  UserProcess,
  OfferData
};
