import { Review } from '../../types/review';
import PlaceComment from '../place-comment/place-comment';

type CommentsListProps = {
  comments: Review[];
}

function CommentsList({ comments }: CommentsListProps): JSX.Element {
  return (
    <>
      {comments.map((comment) => (<PlaceComment review={comment} key={comment.id} />))}
    </>
  );
}

export default CommentsList;
