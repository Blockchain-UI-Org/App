import { render } from '@testing-library/react';

import LoadingSpinner from './loadingSpinner';

describe('LoadingSpinner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingSpinner width="16px" />);
    expect(baseElement).toBeTruthy();
  });
});
