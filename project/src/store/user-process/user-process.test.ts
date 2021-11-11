import { AuthorizationStatus } from '../../const';
import { ActionType } from '../../types/action';
import { userProcess } from './user-process';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        currentLogin: '',
      });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      currentLogin: '',
    };
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.Auth,
    };

    expect(userProcess(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        currentLogin: '',
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      currentLogin: '',
    };
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.NoAuth,
    };

    expect(userProcess(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        currentLogin: '',
      });
  });

  it('should update currentLogin', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      currentLogin: '',
    };
    const requiredAuthorizationAction = {
      type: ActionType.GetCurrentLogin,
      payload: 'test@test.ru',
    };

    expect(userProcess(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        currentLogin: 'test@test.ru',
      });
  });
});
