import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { DataOffer } from '../types/data-offer';
import { adaptOffer } from '../uttils';
import { getCurrentLogin, loadOfferById, loadOffers, redirectToRoute, requireAuthorization, requireLogout } from './action';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataOffer[]>(APIRoute.Hotels);
    dispatch(loadOffers(data.map((offer) => adaptOffer(offer))));
  };

const fetchOfferByIdAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataOffer>(`${APIRoute.Hotels}/${id}`);
    dispatch(loadOfferById(adaptOffer(data)));
    dispatch(redirectToRoute(AppRoute.Offer));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then((response): void => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(getCurrentLogin(response.data.email));
      });
  };

const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };


export {
  fetchOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction,
  fetchOfferByIdAction
};
