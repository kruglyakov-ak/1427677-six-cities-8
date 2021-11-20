import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { MarkerIconUrl } from '../../const';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';

type MapProps = {
  offers: Offer[],
  activePlaceCard: Offer | null;
  currentOffer?: Offer | null;
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
  const { activePlaceCard, offers, currentOffer } = props;
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
    if (map && currentOffer) {
      const marker = new Marker({
        lat: currentOffer.latitude,
        lng: currentOffer.longitude,
      });
      markers.push(marker);
      marker
        .setIcon(currentCustomIcon)
        .addTo(map);
    }
    return () => markers.forEach((marker) => marker.remove());
  }, [map, offers, activePlaceCard, currentOffer]);

  return <div style={{height: '100%'}} ref={mapRef} role="dialog"></div>;
}

export default Map;
