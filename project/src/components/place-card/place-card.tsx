import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsWidth } from '../../utils/uttils';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavoriteStatus } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { redirectToRoute } from '../../store/action';

type PlaceCardProps = {
  offer: Offer,
  onPlaceCardSelect?: (offer: Offer | null) => void,
}
function PlaceCard({ offer, onPlaceCardSelect }: PlaceCardProps): JSX.Element {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const {
    isPremium,
    previewImage,
    price,
    isFavorite,
    rating,
    title,
    type,
    id,
  } = offer;

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      dispatch(redirectToRoute(AppRoute.Login));
    }
    dispatch(changeFavoriteStatus(id, !isFavorite));
  };

  const handleCardSelect = () => {
    if (onPlaceCardSelect) {
      onPlaceCardSelect(offer);
    }
  };
  const handleCardUnselect = () => {
    if (onPlaceCardSelect) {
      onPlaceCardSelect(null);
    }
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={handleCardSelect}
      onMouseLeave={handleCardUnselect}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Main}offer/${id}`} >
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place card" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              isFavorite && authorizationStatus === AuthorizationStatus.Auth
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button  button'
            }
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingStarsWidth(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Main}offer/${id}`} >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
