import { combineReducers } from 'redux';
import { userProcess } from './user-process/user-process';
import { offerProperty } from './offer-property/offer-property';
import { offerData } from './offer-data/offer-data';

enum NameSpace {
  Data = 'DATA',
  Offer = 'OFFER',
  User = 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.Data]: offerData,
  [NameSpace.Offer]: offerProperty,
  [NameSpace.User]: userProcess,
});

type RootState = ReturnType<typeof rootReducer>;

export { NameSpace, rootReducer };
export type { RootState };
