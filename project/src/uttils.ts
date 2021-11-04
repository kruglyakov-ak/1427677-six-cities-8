import { AuthorizationStatus, SortType } from './const';
import { DataComment } from './types/data-comment';
import { DataOffer } from './types/data-offer';
import { Offer } from './types/offer';
import { Review } from './types/review';

const getRatingStarsWidth = (rating: number): number => (20 * Math.round(rating));

const getRandomNumberInRange = (min = 0, max = 1, numberSymbolsAfterComma = 0): number => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const randomNumber = Math.random() * (upper - lower) + lower;
  return Number(randomNumber.toFixed(numberSymbolsAfterComma));
};

const sortOffers = (sortType: string, offers: Offer[]): Offer[] => {
  switch (sortType) {
    case SortType.LowToHighPrice: {
      return offers.slice().sort((prev, next) => prev.price - next.price);
    }
    case SortType.HighToLowPrice: {
      return offers.slice().sort((prev, next) => next.price - prev.price);
    }
    case SortType.TopRated: {
      return offers.slice().sort((prev, next) => next.rating - prev.rating);
    }
    default: {
      return offers;
    }
  }
};

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const adaptOffer = (offer: DataOffer): Offer => {
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
};

const adaptComment = (review: DataComment): Review => {
  const adaptedComment = {
    comment: review.comment,
    date: review.date,
    id: review.id,
    rating: review.rating,
    userAvatarUrl: review.user.avatar_url,
    userId: review.user.id,
    userIsPro: review.user.is_pro,
    userName: review.user.name,
  };

  return adaptedComment;
};

export {
  getRatingStarsWidth,
  getRandomNumberInRange,
  isCheckedAuth,
  adaptOffer,
  adaptComment,
  sortOffers
};

