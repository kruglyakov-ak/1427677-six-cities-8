import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import markerDefault from './img/pin.svg';
import markerCurrent from './img/pin-active.svg';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';

type MapProps = {
  offers: Offer[],
  activePlaceCard: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: markerDefault,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: markerCurrent,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map(props: MapProps): JSX.Element {
  const { activePlaceCard, offers } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);

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

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
