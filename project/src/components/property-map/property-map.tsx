import { useSelector } from 'react-redux';
import { getNearbyOffers } from '../../store/offer-data/selectors';
import Map from '../map/map';

function PropertyMap(): JSX.Element {
  const nearbyOffers = useSelector(getNearbyOffers);

  return (
    <section className="property__map map">
      <Map offers={nearbyOffers} activePlaceCard={null} />
    </section>
  );
}

export default PropertyMap;

