import { Offer } from '../../types/offer';
import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavoritesOffersLstProps = {
  offers: Offer[],
  location: string,
}

function FavoritesOffersLst({ offers, location }: FavoritesOffersLstProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{location}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.slice().filter((offer) => offer.cityName === location && offer.isFavorite).map((offer) => <FavoritePlaceCard offer={offer} key={offer.id}/>)}
      </div>
    </li>
  );
}

export default FavoritesOffersLst;
