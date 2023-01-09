import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { colors } from 'theme';

import { NumberInput } from './numberInput';
const { blue100, blue500 } = colors;

describe('Input', () => {
  it('successfully creates an Number Input', () => {
    render(<NumberInput label="Label" />);
    const input = screen.getByLabelText('Label');
    expect(input).toBeInTheDocument();
  });

  it('successfully creates an Input with max button', () => {
    const onClickHandler = jest.fn();
    render(<NumberInput handleMax={onClickHandler} />);

    const maxButton = screen.getByText('Max');
    expect(maxButton).toBeInTheDocument();
    expect(maxButton).toHaveStyle(`background-color: ${blue100}; color: ${blue500};`);

    fireEvent.click(maxButton);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });

  it('successfully creates an Number Input with icon', () => {
    render(<NumberInput icon="DOT" label="Label" />);
    const icon = screen.getByAltText('DOT-image');
    expect(icon).toHaveStyle(`height: 32px; width: 32px;`);
    expect(icon).toBeInTheDocument();
  });

  it('successfully creates an Number Input with balance', () => {
    render(<NumberInput balanceAmount="88,000" label="Label" />);
    const balance = screen.getByText('Balance: 88,000');
    expect(balance).toBeInTheDocument();
  });
});
