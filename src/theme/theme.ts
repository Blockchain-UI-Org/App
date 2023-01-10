import { colors } from "./colors";
import media from "./media";
import { shadow } from "./shadow";
import {  createIconTheme, IIconTheme } from "./icons";
import { Subset } from "typeutils";
import { ICreditCardTheme } from "./creditcard";
import { IChartTheme } from "./chart";
import { IProgressBarTheme } from "./progressbar";
import { IInputTheme } from "./input";
import { createTypography, ITypographyTheme } from "./typography";


type IColorVariant = {
  bg: string;
  color: string;
};

export interface ThemeInterface {
  colors: {
    common: {
      black: string;
      white: string;
    };
    default: IColorVariant;
    secondary: IColorVariant;
    error: IColorVariant;
    warning: IColorVariant;
    info: IColorVariant & { midtone: string };
    success: IColorVariant;
    grey: {
      100: string;
      200: string;
      300: string;
      500: string;
      700: string;
    };
  };
  media: typeof media;
  components: {
    CreditCard: ICreditCardTheme;
    Chart: IChartTheme;
    ProgressBar: IProgressBarTheme;
    Input: IInputTheme;
    Icons: IIconTheme;
  };
  typography: ITypographyTheme;
  shadows: {
    depth1: string;
    depth2: string;
  };
}



export const createTheme = (
  args: Subset<ThemeInterface> = {}
): ThemeInterface => {
  const typography = createTypography();

  const green = {
    color: colors.darkgreen800,
    background: colors.green100,
    highlightLight: colors.green900,
    highlightDark: colors.darkgreen900,
    midtone: colors.green900,
  };
  const yellow = {
    color: colors.brown700,
    background: colors.brown100,
    midtone: colors.yellow800,
  };
  const blue = {
    color: colors.blue900,
    background: colors.blue100,
    midtone: colors.blue500,
  };
  const red = {
    color: colors.red900,
    background: colors.brown50,
    highlightDark: colors.brown800,
    highlightLight: colors.red500,
    midtone: colors.red500,
  };
  const defaultVariant = {
    background: colors.black800,
    color: colors.white,
  };
  return {
    colors: {
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
    },
    typography,
    components: {
      CreditCard: {
        variants: {
          default: defaultVariant,
          green,
          yellow,
          blue,
          red,
        },
      },
      Input: {
        label: {
          color: colors.black,
        },
        box: {
          common: {
            border: `1px solid ${colors.grey300}`,
            color: colors.grey500,
          },
          focusVisible: {
            borderColor: colors.blue500,
          },
          error: {
            color: colors.error500,
          },
        },
      },
      ProgressBar: {
        variants: {
          default: { midtone: defaultVariant.color },
          blue,
          red,
          green,
          yellow,
        },
      },
      Chart: {
        variants: {
          default: { midtone: defaultVariant.color },
          blue,
          red,
          green,
          yellow,
        },
        common: {
          colors: [yellow.color, blue.color, red.color, green.color],
          foreColor: colors.grey500,
          gridBorderColor: colors.grey700,
          markerColor: colors.grey500,
          labelColor: colors.grey500,
          radialBarBackground: colors.grey500,
          radarStrokeColor: colors.grey500,
          radarConnectorColor: colors.grey500,
          polarRingColor: colors.grey500,
          polarSpokeConnectorColor: colors.grey500,
        },
      },
      Icons: createIconTheme()
    },
    shadows: shadow,

    media,
  };
};

const DefaultTheme = createTheme();

const DarkTheme = createTheme();

export { DefaultTheme, DarkTheme };
