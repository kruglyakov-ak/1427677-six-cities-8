const enum MarkerIconUrl {
  MarkerDefault = 'img/pin.svg',
  MarkerCurrent = 'img/pin-active.svg',
}

const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

const enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
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

enum SortType {
 Popular = 'Popular',
 LowToHighPrice = 'Price: low to high',
 HighToLowPrice = 'Price: high to low',
 TopRated = 'Top rated first',
}

enum City {
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
  offerTypeToReadable,
  City,
  MarkerIconUrl,
  SortType,
  APIRoute
};
