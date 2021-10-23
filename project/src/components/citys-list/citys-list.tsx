import { Citys } from '../../const';
import CityItem from '../city-item.tsx/city-item';

type CitysListProps = {
  currentCity: Citys;
}
function CitysList({ currentCity }: CitysListProps): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(Citys).map((city) => (
          <CityItem
            city={city}
            currentCity={currentCity}
            key={city}
          />))}
      </ul>
    </section>
  );
}

export default (CitysList);
