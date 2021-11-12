import dayjs from 'dayjs';
import { Review } from '../../types/review';
import { getRatingStarsWidth } from '../../utils/uttils';

type PlaceCommentProps = {
  review: Review;
}

function PlaceComment({ review }: PlaceCommentProps): JSX.Element {
  const {
    comment,
    date,
    rating,
    userName,
    userAvatarUrl,
    userIsPro,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userAvatarUrl} alt="Reviews avatar" width="54" height="54" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
        {userIsPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getRatingStarsWidth(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${date}`}>{dayjs(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default PlaceComment;
