import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/useMap';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';

type MapProps = {
  city: City;
  offers: Offer[],
  activePlaceCard: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const { city, activePlaceCard, offers } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.latitude,
          lng: offer.longitude,
        });

        marker
          .setIcon(
            activePlaceCard !== null && offer.id === activePlaceCard.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers, activePlaceCard]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
