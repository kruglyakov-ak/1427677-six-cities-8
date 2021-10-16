import { Offer } from '../../types/offer';

type MapProps = {
  offers: Offer[];
  activePlaceCard: Offer | null;
};

function Map(props: MapProps): JSX.Element {
  const { offers, activePlaceCard } = props;

  return (
    <div
      style={{ height: '500px' }}
    >
    </div>
  );
}

export default Map;
