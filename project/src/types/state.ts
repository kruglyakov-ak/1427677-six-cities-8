import { Citys } from '../const';
import { Offer } from './offer';

type State = {
  city: Citys,
  offers: Offer[] | null,
  offersByCity: Offer[],
};

export type { State };
