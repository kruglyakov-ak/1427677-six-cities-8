import { OfferType } from '../const';
import { address, datatype, name, image, lorem, date } from 'faker';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

const makeFakeOffers = (): Offer[] => (
  new Array(datatype.number(10)).fill(null).map(() => ({
    bedrooms: datatype.number(5),
    cityName: address.cityName(),
    cityLatitude: +address.latitude(),
    cityLongitude: +address.longitude(),
    cityZoom: datatype.number(15),
    latitude: +address.latitude(),
    longitude: +address.longitude(),
    zoom: datatype.number(15),
    description: lorem.sentences(),
    goods: new Array(datatype.number(10)).fill(null).map(() => lorem.word()),
    hostAvatarUrl: image.avatar(),
    hostId: datatype.number(15),
    hostIsPro: datatype.boolean(),
    hostName: name.firstName(),
    id: datatype.number(15),
    images: new Array(datatype.number(10)).fill(null).map(() => image.imageUrl()),
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    maxAdults: datatype.number(10),
    previewImage: image.imageUrl(),
    price: datatype.number(500),
    rating: datatype.number(5),
    title: lorem.words(),
    type: OfferType.Apartment,
  }))
);

const makeFakeReviews = (): Review[] => (
  new Array(datatype.number(10)).fill(null).map(() => ({
    comment: lorem.sentence(),
    date: date.past(),
    id: datatype.number(15),
    rating: datatype.number(5),
    userAvatarUrl: image.imageUrl(),
    userId: datatype.number(15),
    userIsPro: datatype.boolean(),
    userName: name.firstName(),
  }))
);


export { makeFakeOffers, makeFakeReviews };
