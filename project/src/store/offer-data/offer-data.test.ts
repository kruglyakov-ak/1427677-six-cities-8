import { makeFakeOffers, makeFakeReviews } from '../../utils/moks';
import { changeOferFavoriteStatus, loadComments, loadNearbyOffers, loadOfferById, loadOffers } from '../action';
import { offerData } from './offer-data';

const offers = makeFakeOffers();
const comments = makeFakeReviews();

describe('Reducer: offerData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerData(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: null,
        nearbyOffers: [],
        comments: [],
        favoriteOffers: [],
      });
  });

  it('should update offers and isDataLoaded by load offers', () => {
    const state = {
      offers: [],
      isDataLoaded: false,
      offer: null,
      nearbyOffers: [],
      comments: [],
      favoriteOffers: [],
    };
    expect(offerData(state, loadOffers(offers)))
      .toEqual({
        offers: offers,
        isDataLoaded: true,
        offer: null,
        nearbyOffers: [],
        comments: [],
        favoriteOffers: [],
      });
  });

  it('should update offer by load offer', () => {
    const state = {
      offers: [],
      isDataLoaded: false,
      offer: null,
      nearbyOffers: [],
      comments: [],
      favoriteOffers: [],
    };
    expect(offerData(state, loadOfferById(offers[0])))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: offers[0],
        nearbyOffers: [],
        comments: [],
        favoriteOffers: [],
      });
  });

  it('should update nearbyOffers by load nearby offers', () => {
    const state = {
      offers: [],
      isDataLoaded: false,
      offer: null,
      nearbyOffers: [],
      comments: [],
      favoriteOffers: [],
    };
    expect(offerData(state, loadNearbyOffers(offers)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: null,
        nearbyOffers: offers,
        comments: [],
        favoriteOffers: [],
      });
  });

  it('should update comments by load comments', () => {
    const state = {
      offers: [],
      isDataLoaded: false,
      offer: null,
      nearbyOffers: [],
      comments: [],
      favoriteOffers: [],
    };
    expect(offerData(state, loadComments(comments)))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        offer: null,
        nearbyOffers: [],
        comments: comments,
        favoriteOffers: [],
      });
  });

  it('should update isFavorite in offer wherever it is contained', () => {
    const state = {
      offers: offers,
      isDataLoaded: false,
      offer: offers[1],
      nearbyOffers: [],
      comments: [],
      favoriteOffers: offers,
    };

    const offerWithChangedFavoriteStatus = Object.assign({}, offers[0]);
    offerWithChangedFavoriteStatus.isFavorite = !offerWithChangedFavoriteStatus.isFavorite;
    const changedOffers = state.offers.map((offer) => offer.id === offerWithChangedFavoriteStatus.id ? offerWithChangedFavoriteStatus : offer);
    expect(offerData(state, changeOferFavoriteStatus(offerWithChangedFavoriteStatus)))
      .toEqual({
        offers: changedOffers,
        isDataLoaded: false,
        offer: offerWithChangedFavoriteStatus,
        nearbyOffers: [],
        comments: [],
        favoriteOffers: changedOffers,
      });
  });
});
