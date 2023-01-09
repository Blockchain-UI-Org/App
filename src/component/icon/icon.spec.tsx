import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from './icon';
import { regularIcons } from '../static/images/icons/regular';
import { getIconSize } from 'theme/icons';

describe('Regular Icon Components Tests...', () => {
  for (const [key] of Object.entries(regularIcons)) {
    test(`${key} Icon renders all small sizes`, () => {
      render(<Icon name={key} size="small" />);
      const icon = screen.getByTestId(`${key}-image`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('alt', `${key}-image`);
      expect(icon).toHaveAttribute('width', getIconSize['regular']['small']);
    });
  }

  for (const [key] of Object.entries(regularIcons)) {
    test(`${key} Icon renders all medium sizes`, () => {
      render(<Icon name={key} size="medium" />);
      const icon = screen.getByTestId(`${key}-image`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('alt', `${key}-image`);
      expect(icon).toHaveAttribute('width', getIconSize['regular']['medium']);
    });
  }

  for (const [key] of Object.entries(regularIcons)) {
    test(`${key} Icon renders all large sizes`, () => {
      render(<Icon name={key} size="large" />);
      const icon = screen.getByTestId(`${key}-image`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('alt', `${key}-image`);
      expect(icon).toHaveAttribute('width', getIconSize['regular']['large']);
    });
  }
});
