import PlaceReview from '../place-review/place-review';
import { Review } from '../../types/review';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <>
      {reviews.map((review) => (<PlaceReview review={review} key={review.id} />))}
    </>
  );
}

export default ReviewsList;
