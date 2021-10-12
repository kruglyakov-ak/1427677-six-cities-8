import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';


type OffersListProps = {
  offers: Offer[];
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activePlaceCard, setActivePlaceCard] = useState<Offer | null>(null);

  const handleActiveOfferSelect = (offer: Offer): void => {
    setActivePlaceCard(offer);
    // eslint-disable-next-line no-console
    console.log(activePlaceCard);
  };

  const handleDeactiveOfferSelect = (): void => {
    setActivePlaceCard(null);
    // eslint-disable-next-line no-console
    console.log(activePlaceCard);
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
