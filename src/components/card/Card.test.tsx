import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';

describe('Card component', () => {
  test('should render name and url', () => {
    render(<Card name="name" url="url" />);

    const cardContainer =
      screen.getByText('name').parentElement?.parentElement ?? new Element();
    userEvent.click(cardContainer);

    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('url')).toBeInTheDocument();
  });
});
