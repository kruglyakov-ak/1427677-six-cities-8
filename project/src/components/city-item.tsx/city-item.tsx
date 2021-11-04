import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { AppRoute } from '../../const';
import { changeCity } from '../../store/action';
import { Actions } from '../../types/action';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

type CityItemProps = {
  city: string;
}

const mapStateToProps = ({ currentCity, offers }: State) => ({
  currentCity,
  offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCurrentCity(city: string, offers: Offer[]) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CityItemProps;

function CityItem({ city, currentCity, offers, onChangeCurrentCity }: ConnectedComponentProps): JSX.Element {
  const handleCityClick = () => {
    onChangeCurrentCity(city, offers);
  };

  return (
    <li className="locations__item">
      <Link
        className={city === currentCity ?
          'locations__item-link tabs__item--active' :
          'locations__item-link tabs__item'} to={AppRoute.Main}
        onClick={handleCityClick}
      >
        <span>{city}</span>
      </Link>
    </li >
  );
}

export { CityItem };
export default connector(CityItem);


