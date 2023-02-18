import { Subset } from "blockchain-ui/typeutils";
import merge from "lodash/merge";

export type Device = "xsmall" | "mobile" | "tablet" | "desktop";

export type DeviceSizes = "xSmall" | "small" | "medium" | "large";

export type BreakPointDirection = "up" | "down";
export type IMediaTheme = {
  devices: Record<DeviceSizes, number>;
  breakpoints: Record<BreakPointDirection, Record<Device, string>>;
};
const DefaultDevices: IMediaTheme["devices"] = {
  xSmall: 480, // small phone
  small: 720, // large phone
  medium: 960, // tablet
  large: 1200, // laptop
};

const createBreakpoints = (devices: Partial<IMediaTheme["devices"]>): IMediaTheme["breakpoints"] => {
  return {
    up: {
      xsmall: `(min-width: ${devices["xSmall"]}px)`,
      mobile: `(min-width: ${devices["small"]}px)`,
      tablet: `(min-width: ${devices["medium"]}px)`,
      desktop: `(min-width: ${devices["large"]}px)`,
    },
    down: {
      xsmall: `(max-width: ${devices["xSmall"]}px)`,
      mobile: `(max-width: ${devices["small"]}px)`,
      tablet: `(max-width: ${devices["medium"]}px)`,
      desktop: `(max-width: ${devices["large"]}px)`,
    },
  };
};

const DefaultBreakpoints: IMediaTheme["breakpoints"] = createBreakpoints(DefaultDevices);

const DefaultMedia: IMediaTheme = {
  breakpoints: DefaultBreakpoints,
  devices: DefaultDevices,
};

export const createMedia = (devices: Subset<IMediaTheme["devices"]> = {}): IMediaTheme => {
  const mergedDevices = merge(DefaultDevices, devices);
  const newBreakPoints = createBreakpoints(mergedDevices);
  return merge(DefaultMedia, { breakpoints: newBreakPoints, devices: mergedDevices });
};
