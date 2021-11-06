import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';
import {NameSpace} from '../root-reducer';

const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
const getOffer = (state: State): Offer | null => state[NameSpace.Data].offer;
const getNearbyOffers= (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
const getComments = (state: State): Review[] => state[NameSpace.Data].comments;
const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export {
  getOffers,
  getOffer,
  getNearbyOffers,
  getComments,
  getFavoriteOffers,
  getLoadedDataStatus
};
