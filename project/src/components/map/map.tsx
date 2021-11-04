import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { MarkerIconUrl } from '../../const';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';

type MapProps = {
  offers: Offer[],
  activePlaceCard: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: MarkerIconUrl.MarkerDefault,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerIconUrl.MarkerCurrent,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map(props: MapProps): JSX.Element {
  const { activePlaceCard, offers } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map && offers) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.latitude,
          lng: offer.longitude,
        });

        markers.push(marker);
        marker
          .setIcon(
            activePlaceCard !== null && offer.id === activePlaceCard.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
    return () => markers.forEach((marker) => marker.remove());
  }, [map, offers, activePlaceCard]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
