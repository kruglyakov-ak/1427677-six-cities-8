import { AuthorizationStatus } from '../const';
import { Offer } from './offer';
import { Review } from './review';

type State = {
  currentCity: string,
  offers: Offer[],
  currentSortType: string;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  currentLogin: string,
  offer: Offer | null,
  nearbyOffers: Offer[],
  comments: Review[],
  favoriteOffers: Offer[],
};

export type { State };
