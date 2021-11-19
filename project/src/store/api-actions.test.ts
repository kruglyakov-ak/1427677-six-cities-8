import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from 'redux';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { changeFavoriteStatus, checkAuthAction, fetchComments, fetchFavorite, fetchNearbyOffers, fetchOfferByIdAction, fetchOffersAction, loginAction, postComment } from './api-actions';
import { changeOferFavoriteStatus, getCurrentLogin, loadComments, loadFavoriteOffers, loadNearbyOffers, loadOfferById, loadOffers, redirectToRoute, requireAuthorization } from './action';
import { AuthData } from '../types/auth-data';
import { makeFakeDataComments, makeFakeDataOffers } from '../utils/moks';
import { adaptComment, adaptOffer } from '../utils/uttils';
import { CommentPost } from '../types/comment-post';

const mockDataOffers = makeFakeDataOffers();
const mockDataComments = makeFakeDataComments();
const adaptOffers = mockDataOffers.map((offer) => adaptOffer(offer));
const adaptComments = mockDataComments.map((comment) => adaptComment(comment));
const { id, isFavorite } = adaptOffers[0];

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should authorization status is «auth» and save current login when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, { email: 'login' });

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      getCurrentLogin('login'),
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = { login: 'test@test.ru', password: '123456' };
    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'secret' });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      redirectToRoute(AppRoute.Main),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-citys-token', 'secret');
  });

  it('should dispatch loadOffers when GET /hotels', async () => {
    mockAPI
      .onGet(APIRoute.Hotels)
      .reply(200, mockDataOffers);

    const store = mockStore();
    await store.dispatch(fetchOffersAction());

    expect(store.getActions()).toEqual([
      loadOffers(adaptOffers),
    ]);
  });


  it('should dispatch loadOffer when GET /hotels/:hotel_id', async () => {
    mockAPI
      .onGet(`${APIRoute.Hotels}/${id}`)
      .reply(200, mockDataOffers[0]);

    const store = mockStore();
    await store.dispatch(fetchOfferByIdAction(id));

    expect(store.getActions()).toEqual([
      loadOfferById(adaptOffers[0]),
    ]);
  });

  it('should dispatch loadNearbyOffer when GET /hotels/:hotel_id/nearby', async () => {
    mockAPI
      .onGet(`${APIRoute.Hotels}/${id}/nearby`)
      .reply(200, mockDataOffers);

    const store = mockStore();
    await store.dispatch(fetchNearbyOffers(id));

    expect(store.getActions()).toEqual([
      loadNearbyOffers(adaptOffers),
    ]);
  });

  it('should dispatch loadFavoriteOffers when GET /favorite', async () => {
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, mockDataOffers);

    const store = mockStore();
    await store.dispatch(fetchFavorite());

    expect(store.getActions()).toEqual([
      loadFavoriteOffers(adaptOffers),
    ]);
  });

  it('should dispatch changeOferFavoriteStatus when POST /favorite/:hotel_id/:status', async () => {
    mockAPI
      .onPost(`${APIRoute.Favorite}/${id}/${+isFavorite}`)
      .reply(200, mockDataOffers[0]);

    const store = mockStore();
    await store.dispatch(changeFavoriteStatus(id, isFavorite));

    expect(store.getActions()).toEqual([
      changeOferFavoriteStatus(adaptOffers[0]),
    ]);
  });

  it('should dispatch loadComments when GET /comments/:hotel_id', async () => {
    mockAPI
      .onGet(`${APIRoute.Comments}/${id}`)
      .reply(200, mockDataComments);

    const store = mockStore();
    await store.dispatch(fetchComments(id));

    expect(store.getActions()).toEqual([
      loadComments(adaptComments),
    ]);
  });

  it('should dispatch loadComments when POST /comments/:hotel_id', async () => {
    const fakeComment: CommentPost = { comment: 'qwerty', rating: '1' };

    const onSucsses = jest.fn();
    const setDisabledForm = jest.fn();

    mockAPI
      .onPost(`${APIRoute.Comments}/${id}`, fakeComment)
      .reply(200, { mockDataComments });

    const store = mockStore();
    await store.dispatch(postComment(id, fakeComment, setDisabledForm, onSucsses));

    expect(store.getActions()).toEqual([
      await store.dispatch(loadComments(adaptComments)),
    ]);
  });

});
