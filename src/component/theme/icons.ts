import { IconSizes, IconType } from '../static/types/icons';

const regular = {
  small: '16px',
  medium: '24px',
  large: '32px',
  xlarge: '60px',
};

export const getIconSize: Record<IconType, IconSizes> = {
  crypto: {
    xsmall: '24px',
    small: '32px',
    medium: '40px',
    large: '48px',
  },
  regular: regular,
  account: {
    small: '16px',
    medium: '24px',
    large: '32px',
  },
  filled: regular,
  thin: regular,
};
