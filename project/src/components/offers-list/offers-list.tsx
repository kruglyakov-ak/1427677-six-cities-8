import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';


type OffersListProps = {
  offers: Offer[];
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [, setActivePlaceCard] = useState<Offer | null>(null);

  const handleActiveOfferSelect = (offer?: Offer): void => {
    if (offer) {
      setActivePlaceCard(offer);
      return;
    }
    setActivePlaceCard(null);
  };

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onPlaceCardSelect={handleActiveOfferSelect}
        />
      ))}
    </>
  );
}

export default OffersList;
