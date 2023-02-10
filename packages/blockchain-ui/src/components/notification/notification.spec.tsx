import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Notification } from './notification';

describe('Notification', () => {
  it('successfully creates a Positive Notification ', () => {
    render(<Notification type="positive" message="Success!" />);
    const notification = screen.getByText('Success!');
    expect(notification).toBeInTheDocument();
  });

  it('successfully creates a Negative Notification', () => {
    render(<Notification type="negative" message="Failed, add error message which can be long." />);
    const notification = screen.getByText('Failed, add error message which can be long.');
    expect(notification).toBeInTheDocument();
  });

  it('successfully creates a Loading Notification', () => {
    render(<Notification type="loading" message="Loading" />);

    const notification = screen.getByText('Loading');
    expect(notification).toBeInTheDocument();
  });
});
