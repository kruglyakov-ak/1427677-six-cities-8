import FavoritesOffersLst from '../favorites-offers-list/favorites-offers-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoritesScreenEmpty from '../favorites-screen-empty/favorites-screen-empty';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import MainHeader from '../main-header/main-header';

const mapStateToProps = ({ offers }: State) => ({
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesScreen({ offers }: PropsFromRedux): JSX.Element {
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
      <MainHeader />

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
