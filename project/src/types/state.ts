import { Citys } from '../const';
import { Offer } from './offer';

type State = {
  city: Citys,
  offers: Offer[] | null,
};

export type { State };
