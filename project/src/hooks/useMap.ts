import { useEffect, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Offer } from '../types/offer';

function useMap(
  mapRef: React.MutableRefObject<HTMLElement | null>,
  offer: Offer,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: offer.cityLatitude,
          lng: offer.cityLongitude,
        },
        zoom: 10,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, offer]);

  useEffect(() => {
    map?.setView({
      lat: offer.cityLatitude,
      lng: offer.cityLongitude,
    });
  });

  return map;
}

export default useMap;
