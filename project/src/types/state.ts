import { Offer } from './offer';

type State = {
  currentCity: string,
  offers: Offer[],
  offersByCity: Offer[],
};

export type { State };
