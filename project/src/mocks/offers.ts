import { OfferType } from '../const';
import { Offer } from '../types/offer';

const offers: Offer[] = [
  {
    bedrooms: 3,
    cityName: 'Paris',
    cityLatitude: 52.370216,
    cityLongitude: 4.895168,
    cityZoom: 10,
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    hostAvatarUrl: 'img/avatar-max.jpg',
    hostId: 2,
    hostIsPro: false,
    hostName: 'Max',
    id: 1111,
    images: ['img/studio-01.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: OfferType.Apartment,
  },
  {
    bedrooms: 4,
    cityName: 'Amsterdam',
    cityLatitude: 52.370216,
    cityLongitude: 4.895168,
    cityZoom: 10,
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
    zoom: 8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    hostAvatarUrl: 'img/avatar-angelina.jpg',
    hostId: 4,
    hostIsPro: true,
    hostName: 'Angelina',
    id: 2222,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    maxAdults: 5,
    previewImage: 'img/apartment-02.jpg',
    price: 50,
    rating: 5,
    title: 'Wood and stone place',
    type: OfferType.Hotel,
  },
  {
    bedrooms: 2,
    cityName: 'Amsterdam',
    cityLatitude: 52.370216,
    cityLongitude: 4.895168,
    cityZoom: 10,
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    hostAvatarUrl: 'img/avatar-max.jpg',
    hostId: 2,
    hostIsPro: false,
    hostName: 'Max',
    id: 3333,
    images: ['img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    maxAdults: 3,
    previewImage: 'img/apartment-03.jpg',
    price: 470,
    rating: 4.1,
    title: 'Canal View Prinsengracht',
    type: OfferType.House,
  },
  {
    bedrooms: 1,
    cityName: 'Amsterdam',
    cityLatitude: 52.370216,
    cityLongitude: 4.895168,
    cityZoom: 10,
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    hostAvatarUrl: 'img/avatar-angelina.jpg',
    hostId: 4,
    hostIsPro: true,
    hostName: 'Angelina',
    id: 4444,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/room.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    maxAdults: 2,
    previewImage: 'img/room.jpg',
    price: 300,
    rating: 3.2,
    title: 'Nice, cozy, warm big bed apartment',
    type: OfferType.Room,
  },
];

export { offers };
