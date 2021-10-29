/* eslint-disable camelcase */
import { OfferType } from '../const';

type dataOffer = {
  bedrooms: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  description: string;
  goods: string[];
  host: {
    avatar_url: string;
    id: number;
    is_pro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  is_favorite: boolean;
  is_premium: boolean;
  max_adults: number;
  preview_image: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
}

export type { dataOffer };
