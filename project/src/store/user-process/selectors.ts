import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
const getCurrentLogin = (state: State): string => state[NameSpace.user].currentLogin;

export {
  getAuthorizationStatus,
  getCurrentLogin
};
