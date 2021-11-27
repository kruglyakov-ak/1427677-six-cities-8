import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MAX_COMMENT_CHARACTERS, MIN_COMMENT_CHARACTERS } from '../../const';
import { postComment } from '../../store/api-actions';

type SubmitCommentFormProps = {
  id: number,
}

function SubmitCommentForm({ id }: SubmitCommentFormProps): JSX.Element {
  const dispatch = useDispatch();
  const [commentStarValue, setCommentStarValue] = useState<string>('');
  const [commentTextValue, setCommentTextValue] = useState<string>('');
  const [isDisabledSubmitButton, setIsDisabledSubmitButton] = useState<boolean>(true);
  const [isDisabledFormInputs, setIsDisabledFormInputs] = useState<boolean>(false);

  const handleRatingInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCommentStarValue(target.value);
  };

  const handleCommentChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentTextValue(target.value);
  };

  useEffect(() => {
    commentTextValue.length >= MIN_COMMENT_CHARACTERS &&
      commentTextValue.length <= MAX_COMMENT_CHARACTERS &&
      commentStarValue !== ''
      ? setIsDisabledSubmitButton(false)
      : setIsDisabledSubmitButton(true);
  }, [isDisabledSubmitButton, commentTextValue, commentStarValue]);

  const handleFormDisabled = (isDisabled: boolean) => setIsDisabledFormInputs(isDisabled);

  const handleFormReset  = () => {
    setCommentTextValue('');
    setCommentStarValue('');
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = { comment: commentTextValue, rating: commentStarValue };
    dispatch(postComment(id, data, handleFormDisabled, handleFormReset));
    handleFormDisabled(true);
  };


  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          value="5"
          id="5-stars"
          type="radio"
          name="rating"
          onChange={handleRatingInputChange}
          disabled={isDisabledFormInputs}
          checked={!!commentStarValue}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          value="4"
          id="4-stars"
          type="radio"
          name="rating"
          onChange={handleRatingInputChange}
          disabled={isDisabledFormInputs}
          checked={!!commentStarValue}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          value="3"
          id="3-stars"
          type="radio"
          name="rating"
          onChange={handleRatingInputChange}
          disabled={isDisabledFormInputs}
          checked={!!commentStarValue}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          value="2"
          id="2-stars"
          type="radio"
          name="rating"
          onChange={handleRatingInputChange}
          disabled={isDisabledFormInputs}
          checked={!!commentStarValue}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          value="1"
          id="1-star"
          type="radio"
          name="rating"
          onChange={handleRatingInputChange}
          disabled={isDisabledFormInputs}
          checked={!!commentStarValue}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        name="review"
        value={commentTextValue}
        onChange={handleCommentChange}
        disabled={isDisabledFormInputs}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_CHARACTERS} characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabledSubmitButton}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default SubmitCommentForm;
