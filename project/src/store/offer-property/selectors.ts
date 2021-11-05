import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getCurrentCity = (state: State): string => state[NameSpace.offer].currentCity;
const getCurrentSortType = (state: State): string => state[NameSpace.offer].currentSortType;

export {
  getCurrentCity,
  getCurrentSortType
};
