import { createReducer } from '@reduxjs/toolkit';
import { City, SortType } from '../../const';
import { OfferProperty } from '../../types/state';
import { changeCity, changeSortType } from '../action';

const initialState: OfferProperty = {
  currentCity: City.Paris,
  currentSortType: SortType.Popular,
};

const offerProperty = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.currentSortType = action.payload;
    });
});

export { offerProperty };
