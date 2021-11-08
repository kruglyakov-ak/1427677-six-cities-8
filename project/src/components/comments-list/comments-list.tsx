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
          .slice(0, 10)
          .map((comment) => (<PlaceComment review={comment} key={comment.id} />))
      }
    </>
  );
}

export default CommentsList;
