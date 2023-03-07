import { Subset } from "blockchain-ui/typeutils";
import { colors, TSchemeColors, themeColors } from "./colors";
import { colorVariants, IColorVariants } from "./variants";
import merge from "lodash/merge";
import tinycolor from "tinycolor2";
import { TColorSchemes } from "blockchain-ui/typeutils/theme";
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
  common: {
    black: string;
    white: string;
  };
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
} & TSchemeColors;

const DefaultPalette = (theme: TColorSchemes): IColorPalette => ({
  // Theme colors will be defined in themeColors..
  ...themeColors[theme],
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
    darker:colors.grey500,
  },
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
    bg: "#00AB55",
    color: colors.black,
    main: "#00AB55",
    lighter: "#C8FACD",
    contrastText: "#ffffff",
    light: "#5BE584",
    dark: "#007B55",
    darker: "#005249",
  },
  secondary: {
    bg: colors.pink100,
    color: colors.pink500,
    main: "#3366FF",
    lighter: "#D6E4FF",
    light: "#84A9FF",
    contrastText: "#ffffff",
    dark: "#1939B7",
    darker: "#091A7A",
  },
  error: {
    bg: colors.error100,
    color: colors.error500,
    main: "#FF5630",
    lighter: "#FFE9D5",
    light: "#FFAC82",
    contrastText: "#ffffff",
    dark: "#B71D18",
    darker: "#7A0916",
  },
  warning: {
    bg: colors.yellow100,
    color: colors.yellow500,
    main: "#FFAB00",
    lighter: "#FFF5CC",
    light: "#FFD666",
    dark: "#B76E00",
    contrastText: "#212B36",
    darker: "#7A4100",
  },
  info: {
    bg: colors.blue100,
    color: colors.black,
    midtone: colors.blue500,
    main: "#00B8D9",
    lighter: "#CAFDF5",
    light: "#61F3F3",
    dark: "#006C9C",
    contrastText: "#ffffff",
    darker: "#003768",
  },
  success: {
    bg: colors.success100,
    color: colors.success500,
    main: "#36B37E",
    lighter: "#D8FBDE",
    light: "#86E8AB",
    dark: "#1B806A",
    contrastText: "#ffffff",
    darker: "#0A5554",
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
    900: colors.green900,
  },
  colorVariants: colorVariants,
});
/**
 * 
 * @param args
 * @param theme Initializing with default theme light..
 * @returns 
 */
export const createColorPalette = (args: Subset<IColorPalette> = {}, theme: TColorSchemes = "light"): IColorPalette => {
  const resultingPalette = merge({ ...DefaultPalette(theme) }, args);
  resultingPalette.getColor = resultingPalette.getColor.bind(resultingPalette);
  return resultingPalette;
};
