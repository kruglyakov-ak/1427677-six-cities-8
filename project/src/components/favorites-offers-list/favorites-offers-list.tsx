import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ThunkAppDispatch } from '../../types/action';
import { changeCity } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

type FavoritesOffersLstProps = {
  location: string,
}

const mapStateToProps = ({ favoriteOffers }: State) => ({
  favoriteOffers,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onChangeCurrentCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FavoritesOffersLstProps;

function FavoritesOffersLst({ favoriteOffers, location, onChangeCurrentCity }: ConnectedComponentProps): JSX.Element {

  const handleCityClick = () => {
    onChangeCurrentCity(location);
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main} onClick={handleCityClick}>
            <span>{location}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers
          .filter((offer) => offer.cityName === location && offer.isFavorite)
          .map((offer) => <FavoritePlaceCard offer={offer} key={offer.id} />)}
      </div>
    </li>
  );
}

export default connector(FavoritesOffersLst);
