import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getRatingStarsWidth } from '../../uttils';
import { fetchNearbyOffers, fetchOfferByIdAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { connect, ConnectedProps } from 'react-redux';

type PlaceCardProps = {
  offer: Offer,
  onPlaceCardSelect?: (offer: Offer | null) => void,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onOfferClick(id: number) {
    dispatch(fetchOfferByIdAction(id));
    dispatch(fetchNearbyOffers(id));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PlaceCardProps;

function PlaceCard({ offer, onPlaceCardSelect, onOfferClick }: ConnectedComponentProps): JSX.Element {
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
  const handleCardClick = () => {
    onOfferClick(id);
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
        <Link onClick={(evt) => {
          evt.preventDefault();
          handleCardClick();
        }} to='/'
        >
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
          <Link onClick={(evt) => {
            evt.preventDefault();
            handleCardClick();
          }} to='/'
          >{title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


export { PlaceCard };
export default connector(PlaceCard);
