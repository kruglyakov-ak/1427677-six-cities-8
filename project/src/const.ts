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

const offerTypeToReadable = {
  [OfferType.Apartment]: 'Apartment',
  [OfferType.Room]: 'Private Room',
  [OfferType.House]: 'House',
  [OfferType.Hotel]: 'Hotel',
};

const MIN_OFFER_IN_NEIGHBOURHOOD = 0;
const MAX_OFFER_IN_NEIGHBOURHOOD = 3;
const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export {
  OfferType,
  AppRoute,
  AuthorizationStatus,
  MIN_OFFER_IN_NEIGHBOURHOOD,
  MAX_OFFER_IN_NEIGHBOURHOOD,
  offerTypeToReadable,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT
};
