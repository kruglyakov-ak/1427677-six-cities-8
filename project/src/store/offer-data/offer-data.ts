import { createReducer } from '@reduxjs/toolkit';
import { OfferData } from '../../types/state';
import {
  changeOferFavoriteStatus,
  loadComments,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOfferById,
  loadOffers
} from '../action';

const initialState: OfferData = {
  offers: [],
  isDataLoaded: false,
  offer: null,
  nearbyOffers: [],
  comments: [],
  favoriteOffers: [],
};

const offerData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      const { offers } = action.payload;
      state.offers = offers;
      state.isDataLoaded = true;
    })
    .addCase(loadOfferById, (state, action) => {
      const { offer } = action.payload;
      state.offer = offer;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      const { nearbyOffers } = action.payload;
      state.nearbyOffers = nearbyOffers;
    })
    .addCase(loadComments, (state, action) => {
      const { comments } = action.payload;
      state.comments = comments;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      const { favoriteOffers } = action.payload;
      state.favoriteOffers = favoriteOffers;
    })
    .addCase(changeOferFavoriteStatus, (state, action) => {
      const { changedOffer } = action.payload;
      state.offers = state.offers.map((offer) => offer.id === changedOffer.id ? changedOffer : offer);
      state.favoriteOffers = state.favoriteOffers.map((offer) => offer.id === changedOffer.id ? changedOffer : offer);
      state.offer = changedOffer;
    });
});

export { offerData };
