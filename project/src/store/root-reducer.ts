import {combineReducers} from 'redux';
import {userProcess} from './user-process/user-process';
import { offerProperty } from './offer-property/offer-property';
import { offerData } from './offer-data/offer-data';

export enum NameSpace {
  data = 'DATA',
  offer = 'OFFER',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: offerData,
  [NameSpace.offer]: offerProperty,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
