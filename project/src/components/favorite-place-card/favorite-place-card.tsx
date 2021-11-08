import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRatingStarsWidth } from '../../uttils';
import { useDispatch } from 'react-redux';
import { changeFavoriteStatus } from '../../store/api-actions';

type FavoritePlaceCardProps = {
  offer: Offer,
}

function FavoritePlaceCard({ offer }: FavoritePlaceCardProps): JSX.Element {
  const dispatch = useDispatch();

  const {
    previewImage,
    price,
    isFavorite,
    isPremium,
    rating,
    title,
    type,
    id,
  } = offer;

  const handleFavoriteClick = () => {
    dispatch(changeFavoriteStatus(id, !isFavorite));
  };

  return (
    <article className="favorites__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Main}offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place card" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={
            isFavorite
              ? 'place-card__bookmark-button place-card__bookmark-button--active button'
              : 'place-card__bookmark-button  button'
          }
          type="button"
          onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingStarsWidth(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Main}offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritePlaceCard;
