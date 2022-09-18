import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';

describe('Card component', () => {
  test('should render name and url', () => {
    render(<Card name="name" url="url" />);

    const cardContainer = screen.getAllByRole('button')[0];
    userEvent.click(cardContainer);

    expect(screen.getAllByText('name').length).toBe(2);
    expect(screen.getByText('url')).toBeInTheDocument();
  });
});
