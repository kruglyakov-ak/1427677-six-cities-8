import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/action';
import { Offer } from '../types/offer';
import { loadOffers } from './action';

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(loadOffers(data));
  };


export { fetchOffersAction };
