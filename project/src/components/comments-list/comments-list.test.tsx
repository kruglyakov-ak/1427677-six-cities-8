import { render, screen } from '@testing-library/react';
import { makeFakeReviews } from '../../utils/moks';
import CommentsList from './comments-list';

const mockComments = makeFakeReviews();

describe('Component: CommentsList', () => {
  it('should render correctly', () => {
    render(<CommentsList comments={mockComments} />);

    mockComments.map((review) => expect(screen.getByText(review.comment)).toBeInTheDocument());
  });
});
