import { Offer } from './offer';

type State = {
  currentCity: string,
  offers: Offer[],
  offersByCity: Offer[],
  currentSortType: string;
};

export type { State };
