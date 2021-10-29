import { AuthorizationStatus } from './const';
import { dataOffer } from './types/data-offer';
import { Offer } from './types/offer';

const getRatingStarsWidth = (rating: number): number => (20 * Math.round(rating));

const getRandomNumberInRange = (min = 0, max = 1, numberSymbolsAfterComma = 0): number => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const randomNumber = Math.random() * (upper - lower) + lower;
  return Number(randomNumber.toFixed(numberSymbolsAfterComma));
};

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const adaptOffers = (data: dataOffer[]): Offer[] =>
  data
    .map((offer) => {
      const adaptedOffer = {
        bedrooms: offer.bedrooms,
        cityName: offer.city.name,
        cityLatitude: offer.city.location.latitude,
        cityLongitude: offer.city.location.longitude,
        cityZoom: offer.city.location.zoom,
        latitude: offer.location.latitude,
        longitude: offer.location.longitude,
        zoom: offer.location.zoom,
        description: offer.description,
        goods: offer.goods,
        hostAvatarUrl: offer.host.avatar_url,
        hostId: offer.host.id,
        hostIsPro: offer.host.is_pro,
        hostName: offer.host.name,
        id: offer.id,
        images: offer.images,
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image,
        price: offer.price,
        rating: offer.rating,
        title: offer.title,
        type: offer.type,
      };

      return adaptedOffer;

    });


export { getRatingStarsWidth, getRandomNumberInRange, isCheckedAuth, adaptOffers };

