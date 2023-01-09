export type Device = 'xsmall' | 'mobile' | 'tablet' | 'desktop';

export type DeviceSizes = 'xSmall' | 'small' | 'medium' | 'large';

export type BreakPointDirection = 'up' | 'down';

export const MEDIA_WIDTHS: Record<DeviceSizes, number> = {
  xSmall: 480, // small phone
  small: 720, // large phone
  medium: 960, // tablet
  large: 1200, // laptop
};

const breakpoints: Record<BreakPointDirection, Record<Device, string>> = {
  up: {
    xsmall: `(min-width: ${MEDIA_WIDTHS['xSmall']}px)`,
    mobile: `(min-width: ${MEDIA_WIDTHS['small']}px)`,
    tablet: `(min-width: ${MEDIA_WIDTHS['medium']}px)`,
    desktop: `(min-width: ${MEDIA_WIDTHS['large']}px)`,
  },
  down: {
    xsmall: `(max-width: ${MEDIA_WIDTHS['xSmall']}px)`,
    mobile: `(max-width: ${MEDIA_WIDTHS['small']}px)`,
    tablet: `(max-width: ${MEDIA_WIDTHS['medium']}px)`,
    desktop: `(max-width: ${MEDIA_WIDTHS['large']}px)`,
  },
};

export default { MEDIA_WIDTHS, breakpoints };
