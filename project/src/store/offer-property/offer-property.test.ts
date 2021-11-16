import { City, SortType } from '../../const';
import { ActionType } from '../../types/action';
import { offerProperty } from './offer-property';

describe('Reducer: offerProperty', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerProperty(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        currentCity: City.Paris,
        currentSortType: SortType.Popular,
      });
  });

  Object.keys(City).forEach((city) => {
    it(`should change the current city to ${city}`, () => {
      const state = {
        currentCity: City.Paris,
        currentSortType: SortType.Popular,
      };
      const changeCityAction = {
        type: ActionType.ChangeCity,
        payload: city,
      };
      expect(offerProperty(state, changeCityAction))
        .toEqual({
          currentCity: city,
          currentSortType: SortType.Popular,
        });
    });
  });

  Object.keys(SortType).forEach((type) => {
    it(`should change current sort to ${type}`, () => {
      const state = {
        currentCity: City.Paris,
        currentSortType: SortType.Popular,
      };
      const ChangeSortTypeAction = {
        type: ActionType.ChangeSortType,
        payload: type,
      };
      expect(offerProperty(state, ChangeSortTypeAction))
        .toEqual({
          currentCity: City.Paris,
          currentSortType: type,
        });
    });
  });
});
