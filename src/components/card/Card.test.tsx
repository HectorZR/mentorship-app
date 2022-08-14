import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
  test('should render name and url', () => {
    render(<Card name="name" url="url" />);

    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('url')).toBeInTheDocument();
  });
});
