import { OfferType } from '../const';
import { address, random, name, image, lorem } from 'faker';
import { Offer } from '../types/offer';

const makeFakeOffers = (): Offer[] => {
  const fakeOffers = new Array(random.number(10)).fill(null).map(() => ({
    bedrooms: random.number(5),
    cityName: address.cityName(),
    cityLatitude: address.latitude(),
    cityLongitude: address.longitude(),
    cityZoom: random.number(15),
    latitude: address.latitude(),
    longitude: address.longitude(),
    zoom: random.number(15),
    description: lorem.sentences(),
    goods: new Array(random.number(10)).fill(null).map(() => random.word()),
    hostAvatarUrl: image.avatar(),
    hostId: random.number(15),
    hostIsPro: random.boolean(),
    hostName: name.firstName(),
    id: random.number(15),
    images: new Array(random.number(10)).fill(null).map(() => image.imageUrl()),
    isFavorite: random.boolean(),
    isPremium: random.boolean(),
    maxAdults: random.number(10),
    previewImage: image.imageUrl(),
    price: random.number(500),
    rating: random.number(5),
    title: lorem.words(),
    type: OfferType.Apartment,
  }));

  return fakeOffers as unknown as Offer[];
};


export { makeFakeOffers };
