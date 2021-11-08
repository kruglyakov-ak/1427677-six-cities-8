import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { CommentPost } from '../types/comment-post';
import { DataComment } from '../types/data-comment';
import { DataOffer } from '../types/data-offer';
import { adaptComment, adaptOffer } from '../uttils';
import { toast } from 'react-toastify';
import {
  changeOferFavoriteStatus,
  getCurrentLogin,
  loadComments,
  loadFavoriteOffers,
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

const fetchOfferByIdAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataOffer>(`${APIRoute.Hotels}/${id}`);
    dispatch(loadOfferById(adaptOffer(data)));
  };

const fetchNearbyOffers = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataOffer[]>(`${APIRoute.Hotels}/${id}/nearby`);
    dispatch(loadNearbyOffers(data.map((offer) => adaptOffer(offer))));
  };

const fetchComments = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataComment[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data.map((comment) => adaptComment(comment))));
  };

const postComment = (
  id: number,
  { comment, rating }: CommentPost,
  setDisabledForm: (isDisabled: boolean) => void,
  onSucsses: () => void,
): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.post<DataComment[]>(`${APIRoute.Comments}/${id}`, { comment, rating });
      await dispatch(loadComments(data.map((review) => adaptComment(review))));
      onSucsses();
      setDisabledForm(false);
    } catch (error) {
      toast.info(`${error}`);
      setDisabledForm(false);
    }
  };

const fetchFavorite = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<DataOffer[]>(APIRoute.Favorite);
    dispatch(loadFavoriteOffers(data.map((offer) => adaptOffer(offer))));
  };

const changeFavoriteStatus = (id: number, status: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.post<DataOffer>(`${APIRoute.Favorite}/${id}/${+status}`);
    dispatch(changeOferFavoriteStatus(adaptOffer(data)));
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
  postComment,
  fetchFavorite,
  changeFavoriteStatus
};
