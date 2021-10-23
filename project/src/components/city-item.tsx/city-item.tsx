import { Link } from 'react-router-dom';
import { AppRoute, Citys } from '../../const';

type CityItemProps = {
  city: string;
  currentCity: Citys;
}

function CityItem({ city, currentCity }: CityItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className={city === currentCity ?
        'locations__item-link tabs__item--active' :
        'locations__item-link tabs__item'} to={AppRoute.Main}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default (CityItem);
