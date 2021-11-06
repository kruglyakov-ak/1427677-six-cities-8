import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments, fetchNearbyOffers, fetchOfferByIdAction } from '../../store/api-actions';
import MainHeader from '../main-header/main-header';
import PropertyNearPlaces from '../property-near-places/property-near-places';
import PropertyOffer from '../property-offer/property-offer';
interface RouteParams {
  id: string
}

function PropertyScreen(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOfferByIdAction(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  return (
    <div className="page">
      <MainHeader />
      <main className="page__main page__main--property">
        <PropertyOffer/>
        <div className="container">
          <PropertyNearPlaces/>
        </div>
      </main>
    </div>
  );

}

export default PropertyScreen;

