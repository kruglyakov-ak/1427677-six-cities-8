import { useSelector } from 'react-redux';
import { getNearbyOffers, getOffer } from '../../store/offer-data/selectors';
import Map from '../map/map';

function PropertyMap(): JSX.Element {
  const nearbyOffers = useSelector(getNearbyOffers);
  const offer = useSelector(getOffer);
  return (
    <section className="property__map map">
      <Map offers={nearbyOffers} activePlaceCard={null} currentOffer={offer}/>
    </section>
  );
}

export default PropertyMap;

