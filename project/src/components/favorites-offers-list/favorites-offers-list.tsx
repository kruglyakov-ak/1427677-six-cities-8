import { Offer } from '../../types/offer';
import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Dispatch } from 'redux';
import { Actions } from '../../types/action';
import { ChangeCity, GetOffersByCity } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';

type FavoritesOffersLstProps = {
  offers: Offer[],
  location: string,
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCurrentCity(city: string, offers: Offer[]) {
    dispatch(ChangeCity(city));
    dispatch(GetOffersByCity(offers));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FavoritesOffersLstProps;

function FavoritesOffersLst({ offers, location, onChangeCurrentCity }: ConnectedComponentProps): JSX.Element {

  const handleCityClick = () => {
    onChangeCurrentCity(location, offers);
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
        {offers
          .filter((offer) => offer.cityName === location && offer.isFavorite)
          .map((offer) => <FavoritePlaceCard offer={offer} key={offer.id} />)}
      </div>
    </li>
  );
}

export default connector(FavoritesOffersLst);
