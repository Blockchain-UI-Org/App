import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { colors } from 'theme';

import { Input } from './input';
const { error500, blue500 } = colors;

describe('Input', () => {
  it('successfully creates an Input ', () => {
    render(<Input label="Label" />);
    const input = screen.getByLabelText('Label');
    expect(input).toBeInTheDocument();
  });

  it('successfully creates an Input with error', () => {
    render(<Input error="Error message" />);
    const errorMessage = screen.getByText('Error message');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle(`color: ${error500}`);
  });

  it('successfully creates an Input with error action', () => {
    const onClickHandler = jest.fn();
    render(
      <Input
        errorAction={{
          text: 'Take action',
          onClick: onClickHandler,
        }}
      />
    );

    const errorAction = screen.getByText('Take action');
    expect(errorAction).toBeInTheDocument();
    expect(errorAction).toHaveStyle(`color: ${blue500}`);

    fireEvent.click(errorAction);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
