import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from './icon';
import * as regularIcons from '../static/images/icons/regular';
import { DefaultTheme } from "blockchain-ui/theme";


const sizes = DefaultTheme.components.Icons.sizes;


describe('Regular Icon Components Tests...', () => {
  for (const [key] of Object.entries(regularIcons)) {
    test(`${key} Icon renders all small sizes`, () => {
      render(<Icon name={key} size="small" />);
      const icon = screen.getByTestId(`${key}-image`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('alt', `${key}-image`);
      expect(icon).toHaveAttribute('width', sizes['regular']['small']);
    });
  }

  for (const [key] of Object.entries(regularIcons)) {
    test(`${key} Icon renders all medium sizes`, () => {
      render(<Icon name={key} size="medium" />);
      const icon = screen.getByTestId(`${key}-image`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('alt', `${key}-image`);
      expect(icon).toHaveAttribute('width', sizes['regular']['medium']);
    });
  }

  for (const [key] of Object.entries(regularIcons)) {
    test(`${key} Icon renders all large sizes`, () => {
      render(<Icon name={key} size="large" />);
      const icon = screen.getByTestId(`${key}-image`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('alt', `${key}-image`);
      expect(icon).toHaveAttribute('width', sizes['regular']['large']);
    });
  }
});
