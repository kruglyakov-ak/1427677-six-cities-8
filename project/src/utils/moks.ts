import { OfferType } from '../const';
import { address, datatype, name, image, lorem, date } from 'faker';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { DataOffer } from '../types/data-offer';
import { DataComment } from '../types/data-comment';
import { getRandomNumberInRange } from './uttils';

const makeFakeOffers = (): Offer[] => (
  new Array(getRandomNumberInRange(0, 3)).fill(null).map(() => ({
    bedrooms: getRandomNumberInRange(0, 5),
    cityName: address.cityName(),
    cityLatitude: +address.latitude(),
    cityLongitude: +address.longitude(),
    cityZoom: getRandomNumberInRange(0, 15),
    latitude: +address.latitude(),
    longitude: +address.longitude(),
    zoom: getRandomNumberInRange(0, 15),
    description: lorem.sentences(),
    goods: new Array(getRandomNumberInRange(0, 10)).fill(null).map(() => lorem.word()),
    hostAvatarUrl: image.avatar(),
    hostId: getRandomNumberInRange(0, 15),
    hostIsPro: true,
    hostName: name.firstName(),
    id: getRandomNumberInRange(0, 15),
    images: new Array(getRandomNumberInRange(0, 10)).fill(null).map(() => image.imageUrl()),
    isFavorite: true,
    isPremium: true,
    maxAdults: getRandomNumberInRange(0, 15),
    previewImage: image.imageUrl(),
    price: getRandomNumberInRange(100, 5000),
    rating: getRandomNumberInRange(0, 5),
    title: lorem.sentence(),
    type: OfferType.Apartment,
  }))
);

const makeFakeReviews = (): Review[] => (
  new Array(getRandomNumberInRange(0, 3)).fill(null).map(() => ({
    comment: lorem.sentences(),
    date: `${date.past()}`,
    id: getRandomNumberInRange(0, 15),
    rating: getRandomNumberInRange(0, 5),
    userAvatarUrl: image.imageUrl(),
    userId: getRandomNumberInRange(0, 15),
    userIsPro: datatype.boolean(),
    userName: name.firstName(),
  }))
);

const makeFakeDataOffers = (): DataOffer[] => (
  new Array(getRandomNumberInRange(0, 3)).fill(null).map(() => ({
    'bedrooms': getRandomNumberInRange(0, 15),
    'city': {
      'name': address.cityName(),
      'location': {
        'latitude': +address.latitude(),
        'longitude': +address.longitude(),
        'zoom': getRandomNumberInRange(0, 15),
      },
    },
    'location': {
      'latitude': +address.latitude(),
      'longitude': +address.longitude(),
      'zoom': getRandomNumberInRange(0, 15),
    },
    'description': lorem.sentences(),
    'goods': new Array(getRandomNumberInRange(0, 10)).fill(null).map(() => lorem.word()),
    'host': {
      'avatar_url': image.imageUrl(),
      'id': getRandomNumberInRange(0, 15),
      'is_pro': datatype.boolean(),
      'name': name.firstName(),
    },
    'id': getRandomNumberInRange(0, 15),
    'images': new Array(getRandomNumberInRange(0, 10)).fill(null).map(() => image.imageUrl()),
    'is_favorite': datatype.boolean(),
    'is_premium': datatype.boolean(),
    'max_adults': getRandomNumberInRange(0, 15),
    'preview_image': image.imageUrl(),
    'price': getRandomNumberInRange(0, 15),
    'rating': getRandomNumberInRange(0, 15),
    'title': lorem.words(),
    'type': OfferType.Apartment,
  }))
);

const makeFakeDataComments = (): DataComment[] => (
  new Array(getRandomNumberInRange(0, 3)).fill(null).map(() => ({
    'comment': lorem.sentences(),
    'date': `${date.past()}`,
    'id': getRandomNumberInRange(0, 15),
    'rating': getRandomNumberInRange(0, 15),
    'user': {
      'avatar_url': image.imageUrl(),
      'id': getRandomNumberInRange(0, 15),
      'is_pro': datatype.boolean(),
      'name': name.firstName(),
    },
  }))
);


export { makeFakeOffers, makeFakeReviews, makeFakeDataOffers, makeFakeDataComments };
