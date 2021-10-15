import { OfferType } from '../const';

type Offer = {
  bedrooms: number,
  cityName: string,
  latitude: number,
  longitude: number,
  zoom: number,
  description: string,
  goods: string[],
  hostAvatarUrl: string,
  hostId: number,
  hostIsPro: boolean,
  hostName: string,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: OfferType,
};

export type { Offer };
