const MIN_OFFER_IN_NEIGHBOURHOOD = 0;
const MAX_OFFER_IN_NEIGHBOURHOOD = 3;

const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

enum Citys {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

const offerTypeToReadable = {
  [OfferType.Apartment]: 'Apartment',
  [OfferType.Room]: 'Private Room',
  [OfferType.House]: 'House',
  [OfferType.Hotel]: 'Hotel',
};


export {
  OfferType,
  AppRoute,
  AuthorizationStatus,
  MIN_OFFER_IN_NEIGHBOURHOOD,
  MAX_OFFER_IN_NEIGHBOURHOOD,
  offerTypeToReadable,
  Citys
};
