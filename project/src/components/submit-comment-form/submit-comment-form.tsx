import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { postComment } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { CommentPost } from '../../types/comment-post';

type SubmitCommentFormProps = {
  id: number,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(id: number, comment: CommentPost) {
    dispatch(postComment(id, comment));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & SubmitCommentFormProps;

function SubmitCommentForm({ id, onSubmit }: ConnectedComponentProps): JSX.Element {
  const [commentStarValue, setCommentStarValue] = useState<string>('');
  const [commentTextValue, setCommentTextValue] = useState<string>('');

  const ratingInputChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCommentStarValue(evt.target.value);
  };

  const commentTextareaChangeHandle = (evt: { target: { value: string; }; }) => {
    setCommentTextValue(evt.target.value);
  };

  const onSubmitHandle = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    onSubmit(id, { comment: commentTextValue, rating: commentStarValue });

  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          onChange={ratingInputChangeHandle}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          onChange={ratingInputChangeHandle}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          onChange={ratingInputChangeHandle}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          onChange={ratingInputChangeHandle}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          onChange={ratingInputChangeHandle}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={commentTextareaChangeHandle}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" onClick={onSubmitHandle}>Submit</button>
      </div>
    </form>
  );
}

export { SubmitCommentForm };
export default connector(SubmitCommentForm);
