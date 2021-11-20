import { render, screen } from '@testing-library/react';
import Map from './map';
import { makeFakeOffers } from '../../utils/moks';

const mockOffers = makeFakeOffers();

describe('Component: Map', () => {

  it('should render correctly', () => {
    render(<Map offers={mockOffers} activePlaceCard={null} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

});
