import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { getComments} from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import CommentsList from '../comments-list/comments-list';
import SubmitCommentForm from '../submit-comment-form/submit-comment-form';
type PropertyReviewsProps = {
  id: number,
}

function PropertyReviews({ id }: PropertyReviewsProps): JSX.Element {
  const comments = useSelector(getComments);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        <CommentsList comments={comments} />
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth &&
        <SubmitCommentForm
          id={id}
        />}
    </section>
  );
}

export default PropertyReviews;

