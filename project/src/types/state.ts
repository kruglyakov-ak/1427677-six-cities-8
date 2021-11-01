import { AuthorizationStatus } from '../const';
import { Offer } from './offer';

type State = {
  currentCity: string,
  offers: Offer[],
  currentSortType: string;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  currentLogin: string,
  offer?: Offer,
};

export type { State };
