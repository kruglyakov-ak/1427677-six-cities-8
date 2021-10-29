import { APIRoute, AuthorizationStatus } from '../const';
import { ThunkActionResult } from '../types/action';
import { DataOffer } from '../types/data-offer';
import { adaptOffers } from '../uttils';
import { loadOffers, requireAuthorization } from './action';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataOffer[]>(APIRoute.Hotels);
    dispatch(loadOffers(adaptOffers(data)));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };


export {
  fetchOffersAction,
  checkAuthAction
};
