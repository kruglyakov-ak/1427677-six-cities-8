import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getCurrentCity = (state: State): string => state[NameSpace.Offer].currentCity;
const getCurrentSortType = (state: State): string => state[NameSpace.Offer].currentSortType;

export {
  getCurrentCity,
  getCurrentSortType
};
