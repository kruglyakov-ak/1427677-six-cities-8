import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { CommentPost } from '../types/comment-post';
import { DataComment } from '../types/data-comment';
import { DataOffer } from '../types/data-offer';
import { adaptComment, adaptOffer } from '../uttils';
import {
  getCurrentLogin,
  loadComments,
  loadNearbyOffers,
  loadOfferById,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  requireLogout
} from './action';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataOffer[]>(APIRoute.Hotels);
    dispatch(loadOffers(data.map((offer) => adaptOffer(offer))));
  };

const fetchOfferByIdAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataOffer>(`${APIRoute.Hotels}/${id}`);
    dispatch(loadOfferById(adaptOffer(data)));
    dispatch(redirectToRoute(AppRoute.Offer + id));
  };

const fetchNearbyOffers = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataOffer[]>(`${APIRoute.Hotels}/${id}/nearby`);
    dispatch(loadNearbyOffers(data.map((offer) => adaptOffer(offer))));
  };

const fetchComments = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataComment[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data.map((comment) => adaptComment(comment))));
  };

const postComment = (id: number, { comment, rating }: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.post<DataComment[]>(`${APIRoute.Comments}/${id}`, { comment, rating });
    dispatch(loadComments(data.map((review) => adaptComment(review))));
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
  fetchOfferByIdAction,
  fetchNearbyOffers,
  fetchComments,
  postComment
};
