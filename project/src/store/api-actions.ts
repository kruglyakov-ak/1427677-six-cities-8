import { APIRoute, AuthorizationStatus } from '../const';
import { ThunkActionResult } from '../types/action';
import { Offer } from '../types/offer';
import { adaptOffers } from '../uttils';
import { getOffersByCity, loadOffers, requireAuthorization } from './action';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(loadOffers(adaptOffers(data)));
    dispatch(getOffersByCity(adaptOffers(data)));
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
