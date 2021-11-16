import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
const getCurrentLogin = (state: State): string | undefined => state[NameSpace.User].currentLogin;

export {
  getAuthorizationStatus,
  getCurrentLogin
};
