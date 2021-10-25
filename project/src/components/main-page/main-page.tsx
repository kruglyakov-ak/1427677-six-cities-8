import OffersList from '../offers-list/offers-list';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Map from '../map/map';
import { useState } from 'react';
import { State } from '../../types/state';
import { Dispatch } from 'redux';
import { Actions } from '../../types/action';
import { connect, ConnectedProps } from 'react-redux';
import CitysList from '../citys-list/citys-list';
import MainPageEmpty from '../main-page-empty/main-page-empty';

const mapStateToProps = ({ currentCity, offersByCity }: State) => ({
  currentCity,
  offersByCity,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPage({ currentCity, offersByCity }: PropsFromRedux): JSX.Element {
  const [activePlaceCard, setActivePlaceCard] = useState<Offer | null>(null);

  const handleActiveOfferSelect = (offer: Offer | null): void => {
    setActivePlaceCard(offer);
  };

  if (offersByCity.length === 0) {
    return <MainPageEmpty currentCity={currentCity}/>;
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
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
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
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offersByCity} handleActiveOfferSelect={handleActiveOfferSelect} />
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

export default connector (MainPage);
