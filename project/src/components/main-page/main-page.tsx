import OffersList from '../offers-list/offers-list';
import { Offer } from '../../types/offer';
import Map from '../map/map';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CitysList from '../citys-list/citys-list';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import SortOptionsList from '../sort-options-list/sort-options-list';
import MainHeader from '../main-header/main-header';
import { sortOffers } from '../../utils/uttils';
import { getCurrentCity, getCurrentSortType } from '../../store/offer-property/selectors';
import { getOffers } from '../../store/offer-data/selectors';

function MainPage(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const offers = useSelector(getOffers);
  const currentSortType = useSelector(getCurrentSortType);

  const offersByCity = offers.filter((offer) => offer.cityName === currentCity);

  const [activePlaceCard, setActivePlaceCard] = useState<Offer | null>(null);
  const [isSortOptionsOpen, setIsSortOptionsOpen] = useState<boolean>(false);

  const handleActiveOfferSelect = (offer: Offer | null): void => {
    setActivePlaceCard(offer);
  };

  const handleSortOptionOpen = (): void => {
    setIsSortOptionsOpen(!isSortOptionsOpen);
  };

  useEffect(() => setIsSortOptionsOpen(false), [currentSortType, currentCity]);

  if (offersByCity.length === 0) {
    return <MainPageEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <MainHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitysList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0} onClick={handleSortOptionOpen}>
                  {currentSortType}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortOptionsList
                  isSortOptionsOpen={isSortOptionsOpen}
                />
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sortOffers(currentSortType, offersByCity)} handleActiveOfferSelect={handleActiveOfferSelect} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offersByCity} activePlaceCard={activePlaceCard} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
