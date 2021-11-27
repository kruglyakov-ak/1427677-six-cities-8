import { makeFakeReviews } from '../../utils/moks';
import { render, screen } from '@testing-library/react';
import PlaceComment from './place-comment';

const mockComments = makeFakeReviews().slice(0, 1);

describe('Component: PlaceComment', () => {

  it('should render correctly', () => {
    render(<PlaceComment review={mockComments[0]} />);

    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
  });
});
