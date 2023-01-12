import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CryptoIcon } from '../icon';
import { cryptoIcons } from '../../static/images/icons/crypto';
import { CryptoSymbols } from '../../static/types/crypto';
import { DefaultTheme } from 'theme';


const sizes = DefaultTheme.components.Icons.sizes;

describe('Crypto Icon Components Tests...', () => {
  for (const [key] of Object.entries(cryptoIcons)) {
    test(`${key} Icon renders all small sizes`, () => {
      render(<CryptoIcon cryptoSymbol={key as CryptoSymbols} size="small" />);
      const icon = screen.getByTestId(`${key}-image`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('alt', `${key}-image`);
      expect(icon).toHaveAttribute('width', sizes['crypto']['small']);
    });
  }

  for (const [key] of Object.entries(cryptoIcons)) {
    test(`${key} Icon renders all medium sizes`, () => {
      render(<CryptoIcon cryptoSymbol={key as CryptoSymbols} size="medium" />);
      const icon = screen.getByTestId(`${key}-image`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('alt', `${key}-image`);
      expect(icon).toHaveAttribute('width', sizes['crypto']['medium']);
    });
  }

  for (const [key] of Object.entries(cryptoIcons)) {
    test(`${key} Icon renders all large sizes`, () => {
      render(<CryptoIcon cryptoSymbol={key as CryptoSymbols} size="large" />);
      const icon = screen.getByTestId(`${key}-image`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('alt', `${key}-image`);
      expect(icon).toHaveAttribute('width', sizes['crypto']['large']);
    });
  }
});
