import { MAX_COUNT_COMMENTS, MIN_COUNT_COMMENTS } from '../../const';
import { Review } from '../../types/review';
import PlaceComment from '../place-comment/place-comment';

type CommentsListProps = {
  comments: Review[];
}

function CommentsList({ comments }: CommentsListProps): JSX.Element {
  return (
    <>
      {
        comments
          .slice()
          .sort((prev, next) => new Date(next.date).getTime() - new Date(prev.date).getTime())
          .slice(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS)
          .map((comment) => (<PlaceComment review={comment} key={comment.id} />))
      }
    </>
  );
}

export default CommentsList;
