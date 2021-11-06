import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { changeCity } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteOffers } from '../../store/offer-data/selectors';

type FavoritesOffersLstProps = {
  location: string,
}

function FavoritesOffersLst({ location }: FavoritesOffersLstProps): JSX.Element {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const dispatch = useDispatch();

  const handleCityClick = () => {
    dispatch(changeCity(location));
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

export default FavoritesOffersLst;
