import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus, offerTypeToReadable, MIN_COUNT_OFFER_IMAGES, MAX_COUNT_OFFER_IMAGES } from '../../const';
import { fetchComments, fetchNearbyOffers, fetchOfferByIdAction } from '../../store/api-actions';
import { getComments, getNearbyOffers, getOffer } from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getRatingStarsWidth } from '../../uttils';
import CommentsList from '../comments-list/comments-list';
import MainHeader from '../main-header/main-header';
import MainPage404 from '../main-page-404/main-page-404';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import SubmitCommentForm from '../submit-comment-form/submit-comment-form';
interface RouteParams {
  id: string
}

function PropertyScreen(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offer = useSelector(getOffer);
  const nearbyOffers = useSelector(getNearbyOffers);
  const comments = useSelector(getComments);
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOfferByIdAction(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  if (!offer) {
    return (
      <MainPage404 />
    );
  }

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
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments ? comments.length : ''}</span></h2>
                <ul className="reviews__list">
                  {comments ? <CommentsList comments={comments} /> : ''}
                </ul>
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <SubmitCommentForm
                    id={offer.id}
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

export default PropertyScreen;

