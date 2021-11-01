import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AuthorizationStatus, offerTypeToReadable, MIN_COUNT_OFFER_IMAGES, MAX_COUNT_OFFER_IMAGES } from '../../const';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import { getRatingStarsWidth } from '../../uttils';
import MainHeader from '../main-header/main-header';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import SubmitCommentForm from '../submit-comment-form/submit-comment-form';

const mapStateToProps = ({ offers, authorizationStatus, offer, nearbyOffers }: State) => ({
  offer,
  offers,
  authorizationStatus,
  nearbyOffers,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function PropertyScreen({ offers, authorizationStatus, offer, nearbyOffers }: PropsFromRedux): JSX.Element {
  const [, setCommentStarValue] = useState<string | null>('');
  const [, setCommentTextValue] = useState<string | null>('');

  const handleRatingStarSelect = (value: string): void => {
    setCommentStarValue(value);
  };

  const handleCommentTextInput = (value: string): void => {
    setCommentTextValue(value);
  };

  if (offer) {
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

    return (
      <div className="page">
        <MainHeader />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(MIN_COUNT_OFFER_IMAGES, MAX_COUNT_OFFER_IMAGES).map((image: string) => (
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
                  <h2 className="reviews__title">Reviews · <span className="reviews__amount">0</span></h2>
                  <ul className="reviews__list">
                    {/* <ReviewsList reviews={reviewsOnPlace} /> */}
                  </ul>
                  {authorizationStatus === AuthorizationStatus.Auth ?
                    <SubmitCommentForm
                      handleRatingStarSelect={handleRatingStarSelect}
                      handleCommentTextInput={handleCommentTextInput}
                    />
                    : ''}
                </section>
              </div>
            </div>
            <section className="property__map map">
              {nearbyOffers ? <Map offers={nearbyOffers} activePlaceCard={null} /> : ''}
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearbyOffers ? <OffersList offers={nearbyOffers} /> : ''}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <MainHeader />
    </div>
  );
}

export { PropertyScreen };
export default connector(PropertyScreen);
