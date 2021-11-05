import { AuthorizationStatus } from '../../const';
import { Actions, ActionType } from '../../types/action';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  currentLogin: '',
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization: {
      return { ...state, authorizationStatus: action.payload };
    }
    case ActionType.RequireLogout: {
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    }
    case ActionType.GetCurrentLogin: {
      return { ...state, currentLogin: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { userProcess };
