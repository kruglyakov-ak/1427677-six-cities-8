import OffersList from '../offers-list/offers-list';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, SortType } from '../../const';
import Map from '../map/map';
import { useEffect, useState } from 'react';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import CitysList from '../citys-list/citys-list';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import SortOptionsList from '../sort-options-list/sort-options-list';
import { ThunkAppDispatch } from '../../types/action';
import { logoutAction } from '../../store/api-actions';

const sortOffers = (sortType: string, offers: Offer[]) => {
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

const mapStateToProps = ({ currentCity, offers, currentSortType, authorizationStatus }: State) => ({
  currentCity,
  offers,
  currentSortType,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPage(props: PropsFromRedux): JSX.Element {
  const {
    currentCity,
    offers,
    currentSortType,
    authorizationStatus,
    onLogout,
  } = props;

  const offersByCity = offers.filter((offer) => offer.cityName === currentCity);

  const [activePlaceCard, setActivePlaceCard] = useState<Offer | null>(null);
  const [isSortOptionsOpen, setIsSortOptionsOpen] = useState<boolean>(false);

  const handleActiveOfferSelect = (offer: Offer | null): void => {
    setActivePlaceCard(offer);
  };

  const handleSortOptionOpen = (): void => {
    setIsSortOptionsOpen(!isSortOptionsOpen);
  };

  useEffect(() => setIsSortOptionsOpen(false), [currentSortType, currentCity]);

  if (offersByCity.length === 0) {
    return <MainPageEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoute.Login}>
                        <span className="header__signout" onClick={onLogout}>Sign out</span>
                      </Link>
                    </li>
                  </>
                  :
                  <li className="header__nav-item user">
                    <Link className="header__nav-link" to={AppRoute.Login}>
                      <span className="header__signout">Sign in</span>
                    </Link>
                  </li>}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitysList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0} onClick={handleSortOptionOpen}>
                  {currentSortType}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortOptionsList
                  isSortOptionsOpen={isSortOptionsOpen}
                />
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sortOffers(currentSortType, offersByCity)} handleActiveOfferSelect={handleActiveOfferSelect} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offersByCity} activePlaceCard={activePlaceCard} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default connector(MainPage);
