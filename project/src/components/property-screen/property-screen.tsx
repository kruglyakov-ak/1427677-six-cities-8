import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppRoute,
  MAX_OFFER_IN_NEIGHBOURHOOD,
  MIN_OFFER_IN_NEIGHBOURHOOD,
  offerTypeToReadable
} from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { getRatingStarsWidth } from '../../uttils';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import ReviewsList from '../reviews-list/reviews-list';
import SubmitCommentForm from '../submit-comment-form/submit-comment-form';

type PropertyScreenProps = {
  offer: Offer,
  offers: Offer[],
  reviews: Review[],
}

function PropertyScreen({ offer, offers, reviews }: PropertyScreenProps): JSX.Element {
  const [, setCommentStarValue] = useState<string | null>('');
  const [, setCommentTextValue] = useState<string | null>('');
  const [activePlaceCard, setActivePlaceCard] = useState<Offer | null>(null);

  const handleActiveOfferSelect = (PlaceCard: Offer | null): void => {
    setActivePlaceCard(PlaceCard);
  };

  const handleRatingStarSelect = (value: string): void => {
    setCommentStarValue(value);
  };

  const handleCommentTextInput = (value: string): void => {
    setCommentTextValue(value);
  };

  const {
    images,
    isPremium,
    bedrooms,
    maxAdults,
    price,
    isFavorite,
    rating,
    title,
    type,
    goods,
    hostName,
    hostIsPro,
    description,
    // id,
  } = offer;

  const placesInNeighbourhood = offers.slice(MIN_OFFER_IN_NEIGHBOURHOOD, MAX_OFFER_IN_NEIGHBOURHOOD);

  return (
    <div className="page">s
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={`${image}`} alt="Room" />
                </div>),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={isFavorite ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button  button'} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getRatingStarsWidth(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerTypeToReadable[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>))};
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" alt="Host avatar" width="74" height="74" />
                  </div>
                  <span className="property__user-name">
                    {hostName}
                  </span>

                  {hostIsPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}

                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <ReviewsList reviews={reviews} offer={offer} />
                </ul>
                <SubmitCommentForm
                  handleRatingStarSelect={handleRatingStarSelect}
                  handleCommentTextInput={handleCommentTextInput}
                />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers} activePlaceCard={activePlaceCard} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={placesInNeighbourhood} handleActiveOfferSelect={handleActiveOfferSelect} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
