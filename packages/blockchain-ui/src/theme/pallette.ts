import { Subset } from "blockchain-ui/typeutils";
import { colors } from "./colors";
import { colorVariants, IColorVariants } from "./variants";
import merge from "lodash/merge";
type IPalette = {
  bg: string;
  color: string;
};

export type IColorPalette = {
  common: {
    black: string;
    white: string;
  };
  default: IPalette;
  secondary: IPalette;
  error: IPalette;
  warning: IPalette;
  info: IPalette & { midtone: string };
  success: IPalette;
  grey: {
    100: string;
    200: string;
    300: string;
    500: string;
    700: string;
  };
  colorVariants: IColorVariants;
};
const DefaultPalette = {
  common: {
    black: colors.black,
    white: colors.white,
  },
  default: {
    bg: colors.grey50,
    color: colors.black,
  },
  secondary: {
    bg: colors.pink100,
    color: colors.pink500,
  },
  error: {
    bg: colors.error100,
    color: colors.error500,
  },
  warning: {
    bg: colors.yellow100,
    color: colors.yellow500,
  },
  info: {
    bg: colors.blue100,
    color: colors.black,
    midtone: colors.blue500,
  },
  success: {
    bg: colors.success100,
    color: colors.success500,
  },
  grey: {
    100: colors.grey100,
    200: colors.grey200,
    300: colors.grey300,
    500: colors.grey500,
    700: colors.grey700,
  },
  colorVariants: colorVariants,
};
export const createColorPalette = (args: Subset<IColorPalette> = {}): IColorPalette => {
  return merge(DefaultPalette, args);
};
