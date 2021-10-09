import PlaceReview from '../place-review/place-review';
import { Review } from '../../types/review';
import { Offer } from '../../types/offer';


type ReviewsListProps = {
  reviews: Review[];
  offer: Offer;
}

function ReviewsList({ reviews, offer }: ReviewsListProps): JSX.Element {
  const reviewsOnPlace = reviews.filter((review) => offer.id === review.offersID);

  return (
    <>
      {reviewsOnPlace.map((review) => (<PlaceReview review={review} key={review.id} />))}
    </>
  );
}

export default ReviewsList;
