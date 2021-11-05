import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';
import {NameSpace} from '../root-reducer';

const getOffers = (state: State): Offer[] => state[NameSpace.data].offers;
const getOffer = (state: State): Offer | null => state[NameSpace.data].offer;
const getNearbyOffers= (state: State): Offer[] => state[NameSpace.data].nearbyOffers;
const getComments = (state: State): Review[] => state[NameSpace.data].comments;
const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.data].favoriteOffers;
const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;

export {
  getOffers,
  getOffer,
  getNearbyOffers,
  getComments,
  getFavoriteOffers,
  getLoadedDataStatus
};
