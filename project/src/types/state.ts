import { Offer } from './offer';

type State = {
  currentCity: string,
  offers: Offer[],
  offersByCity: Offer[],
  currentSortType: string;
  isDataLoaded: boolean,
};

export type { State };
