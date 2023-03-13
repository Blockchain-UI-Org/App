import { Subset } from "blockchain-ui/typeutils";
import { colors, IBuiColor } from "./colors";
import { colorVariants, IColorVariants } from "./variants";
import merge from "lodash/merge";
import tinycolor from "tinycolor2";

type IPalette = {
  // TODO:  Remove Bg Color (old Version kept for not breaking Application, after changing call components to use new theme)
  bg: string;
  // TODO:  Remove  color (old field kept for not breaking Application)
  color: string;
  main: string;
  lighter: string;
  light: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export type IColorPalette = {
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    main: string;
    paper: string;
    neutral: string;
  };
  common: {
    black: string;
    white: string;
  };
  buiColors: IBuiColor;
  default: IPalette;
  secondary: IPalette;
  primary: IPalette;
  error: IPalette;
  warning: IPalette;
  info: IPalette & { midtone: string };
  success: IPalette;
  getColor: <T extends keyof IPalette>(
    name: T | "transparent",
    transparency?: number
  ) => (val: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "success" | "default") => string;
  grey: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  colorVariants: IColorVariants;
};

const DefaultPalette: IColorPalette = {
  text: {
    primary: colors.grey800,
    secondary: colors.grey600,
    disabled: colors.grey500,
  },
  background: {
    main: colors.grey500,
    paper: colors.white,
    neutral: colors.grey200,
  },
  common: {
    black: colors.black,
    white: colors.white,
  },
  default: {
    bg: colors.grey50,
    color: colors.black,
    main: colors.grey300,
    lighter: colors.grey100,
    contrastText: colors.grey800,
    light: colors.grey200,
    dark: colors.grey400,
    darker: colors.grey500,
  },
  buiColors: colors,
  getColor: function (name, transparency) {
    return (type) => {
      if (name === "transparent") {
        return name;
      }
      const result = this[type][name];
      return typeof transparency !== "undefined"
        ? tinycolor(result).setAlpha(transparency).toRgbString()
        : (result as string);
    };
  },

  primary: {
    // TODO Remove bg Property They are old theme variables need to be removed after upgrades
    bg: "#00AB55",
    // TODO Remove color Property They are old theme variables need to be removed after upgrades
    color: colors.black,
    
    main: colors.primary500,
    lighter: colors.primary100,
    contrastText: colors.white,
    light: colors.primary300,
    dark: colors.primary700,
    darker: colors.primary900,
  },
  secondary: {
    // TODO Remove Bg Property
    bg: colors.pink100,
    // TODO Remove color Property They are old theme variables need to be removed after upgrades

    color: colors.pink500,
    main: colors.secondary500,
    lighter: colors.secondary100,
    light: colors.secondary300,
    contrastText: colors.white,
    dark: colors.secondary700,
    darker: colors.secondary900,
  },
  error: {
    // TODO Remove Bg Property
    bg: colors.error100,
    // TODO Remove color Property They are old theme variables need to be removed after upgrades
    color: colors.error500,
    main: colors.error500,
    lighter: colors.error100,
    light: colors.error300,
    contrastText: "#ffffff",
    dark: colors.error700,
    darker: colors.error900,
  },
  warning: {
    bg: colors.warning100,
    color: colors.warning500,
    main: colors.warning500,
    lighter: colors.warning100,
    light: colors.warning300,
    dark: colors.warning700,
    contrastText: colors.grey800,
    darker: colors.warning900,
  },
  info: {
    // TODO Remove color Property They are old theme variables need to be removed after upgrades
    bg: colors.blue100,
    // TODO Remove color Property They are old theme variables need to be removed after upgrades
    color: colors.black,
    // TODO Remove color Property They are old theme variables need to be removed after upgrades (Used in Credit Card)
    midtone: colors.blue500,
    main: colors.info500,
    lighter: colors.info100,
    light: colors.info300,
    dark: colors.info700,
    contrastText: colors.white,
    darker: colors.info900,
  },
  success: {
    // TODO Remove color Property They are old theme variables need to be removed after upgrades (Used in Credit Card)
    bg: colors.success100,
    // TODO Remove color Property They are old theme variables need to be removed after upgrades (Used in Credit Card)
    color: colors.success500,
    main: colors.success500,
    lighter: colors.success100,
    light: colors.success300,
    dark: colors.success700,
    contrastText: colors.white,
    darker: colors.success900,
  },
  grey: {
    100: colors.grey100,
    200: colors.grey200,
    300: colors.grey300,
    400: colors.grey400,
    500: colors.grey500,
    600: colors.grey600,
    700: colors.grey700,
    800: colors.grey800,
    900: colors.grey900,
  },
  colorVariants: colorVariants,
} as IColorPalette;
/**
 *
 * @param args
 * @param theme Initializing with default theme light..
 * @returns
 */
export const createColorPalette = (args: Subset<IColorPalette> = {}): IColorPalette => {
  const resultingPalette = merge({}, DefaultPalette, args);
  resultingPalette.getColor = resultingPalette.getColor.bind(resultingPalette);
  return resultingPalette;
};
