import { render, screen } from '@testing-library/react';

import Events from './Events';

describe('Events', () => {
  it('renders Events component', () => {
    render(<Events />);
    screen.debug();
  });

  it('renders event titles', () => {
    render(<Events />);
    const eventTitles = screen.getAllByText(/^Event \d+$/);
    expect(eventTitles.length).toBeGreaterThan(0);
  });
});
