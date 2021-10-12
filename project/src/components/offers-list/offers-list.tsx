import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';


type OffersListProps = {
  offers: Offer[];
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activePlaceCard, setActivePlaceCard] = useState<Offer | null>(null);

  const handleActiveOfferSelect = (offer: Offer): void => {
    setActivePlaceCard(offer);
  };

  const handleDeactiveOfferSelect = (): void => {
    setActivePlaceCard(null);
  };

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onPlaceCardSelect={handleActiveOfferSelect}
          onPlaceCardUnselect={handleDeactiveOfferSelect}
        />
      ))}
    </>
  );
}

export default OffersList;
