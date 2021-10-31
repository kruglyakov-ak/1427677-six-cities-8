import FavoritesOffersLst from '../favorites-offers-list/favorites-offers-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoritesScreenEmpty from '../favorites-screen-empty/favorites-screen-empty';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { connect, ConnectedProps } from 'react-redux';
import { logoutAction } from '../../store/api-actions';

const mapStateToProps = ({ offers, currentLogin }: State) => ({
  offers,
  currentLogin,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesScreen({ offers, onLogout, currentLogin }: PropsFromRedux): JSX.Element {
  const favoriteLocations: Set<string> = new Set();
  offers.forEach((offer) => {
    if (offer.isFavorite) {
      favoriteLocations.add(offer.cityName);
    }
  });

  if (favoriteLocations.size === 0) {
    return <FavoritesScreenEmpty />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{currentLogin}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout" onClick={onLogout}>Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {[...favoriteLocations].map((location) => (
                <FavoritesOffersLst
                  offers={offers}
                  location={location}
                  key={location}
                />))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export { FavoritesScreen };
export default connector(FavoritesScreen);
