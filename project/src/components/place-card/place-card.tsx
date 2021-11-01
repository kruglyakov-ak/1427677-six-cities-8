import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsWidth } from '../../uttils';
import { AppRoute } from '../../const';

type PlaceCardProps = {
  offer: Offer,
  onPlaceCardSelect?: (offer: Offer | null) => void,
}
function PlaceCard({ offer, onPlaceCardSelect }: PlaceCardProps): JSX.Element {
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
        <Link to={AppRoute.Offer + id} >
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place card" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button  button'} type="button">
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
          <Link to={AppRoute.Offer + id} >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
