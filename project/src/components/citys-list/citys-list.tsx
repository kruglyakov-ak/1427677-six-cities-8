import { Citys } from '../../const';
import CityItem from '../city-item.tsx/city-item';

function CitysList(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(Citys).map((city) => (
          <CityItem
            city={city}
            key={city}
          />))}
      </ul>
    </section>
  );
}

export default (CitysList);
