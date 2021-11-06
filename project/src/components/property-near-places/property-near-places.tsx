import { useSelector } from 'react-redux';
import { getNearbyOffers } from '../../store/offer-data/selectors';
import OffersList from '../offers-list/offers-list';

function PropertyNearPlaces(): JSX.Element {
  const nearbyOffers = useSelector(getNearbyOffers);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <OffersList offers={nearbyOffers} />
      </div>
    </section>
  );
}

export default PropertyNearPlaces;

