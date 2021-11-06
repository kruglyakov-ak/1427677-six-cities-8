import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { changeCity } from '../../store/action';
import { getCurrentCity } from '../../store/offer-property/selectors';

type CityItemProps = {
  city: string;
}

function CityItem({ city }: CityItemProps): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const dispatch = useDispatch();

  const handleCityClick = () => {
    dispatch(changeCity(city));
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

export default CityItem;


