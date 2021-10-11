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

const OfferType: {
  [apartment: string]: string,
  room: string,
  house: string,
  hotel: string,
} = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export {
  OfferType,
  AppRoute,
  AuthorizationStatus
};
