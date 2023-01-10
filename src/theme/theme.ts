import { colors  } from "./colors";
// import typography from "../component/typography/typography";
import media from "./media";
import {
  // legacyColors as colors,
  shadow,
} from "./colors";

import { IconSizes, IconType } from "../component/static/types/icons";
import { DefaultTheme as IDefaultTheme } from "styled-components";
import { getIconSize } from "./icons";

type IFontInterface = {
  fontWeight?: number | string;
  fontSize?: string | number;
  lineHeight?: number | string;
  fontFamily?: string;
};

type IColorVariant = {
  bg: string;
  // bgLight: string;
  // bgDark: string;
  color: string;
};

type ICreditCardVariant = {
  color: string;
  background: string;
  highlightLight?: string;
  highlightDark?: string;
  midtone?: string;
};

type IProgressBarVariant = {
  midtone: string;
};

type IChartVariant = IProgressBarVariant;

export interface ThemeInterface extends IDefaultTheme {
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
    CreditCard: {
      variants: {
        green: ICreditCardVariant;
        yellow: ICreditCardVariant;
        blue: ICreditCardVariant;
        red: ICreditCardVariant;
        default: ICreditCardVariant;
      };
    };
    Chart: {
      variants: {
        default: IChartVariant;
        green: IChartVariant;
        yellow: IChartVariant;
        blue: IChartVariant;
        red: IChartVariant;
      };
      common: {
        colors: string[];
        foreColor: string;
        gridBorderColor: string;
        markerColor: string;
        labelColor: string;
        radialBarBackground: string;
        radarStrokeColor: string;
        radarConnectorColor: string;
        polarRingColor: string;
        polarSpokeConnectorColor: string;
      };
    };
    ProgressBar: {
      variants: {
        default: IProgressBarVariant;
        green: IProgressBarVariant;
        yellow: IProgressBarVariant;
        blue: IProgressBarVariant;
        red: IProgressBarVariant;
      };
    };
    Input: {
      label: {
        color: string;
      };
      box: {
        common: {
          color: string;
          border: string;
        };
        focusVisible: {
          borderColor: string;
        };
        error: {
          color: string;
        };
      };
    };
  };
  typography: {
    common: IFontInterface;
    h1: IFontInterface;
    h2: IFontInterface;
    h3: IFontInterface;
    h4: IFontInterface;
    h5: IFontInterface;
    h6: IFontInterface;
    display1: IFontInterface;
    display2: IFontInterface;
    body1: IFontInterface;
    body2: IFontInterface;
  };
  shadows: {
    depth1: string;
    depth2: string;
  };
  getIconSize: Record<IconType, IconSizes>;
}

const createTypography = (): ThemeInterface["typography"] => {
  return {
    common: { fontFamily: "CircularStd, Public Sans" },
    h1: {
      fontSize: 32,
      lineHeight: "48px",
    },
    h2: {
      fontSize: 24,
      lineHeight: "36px",
    },
    h3: {
      fontSize: 20,
      lineHeight: "30px",
    },
    h4: {
      fontSize: 18,
      lineHeight: "28px",
    },
    h5: {
      fontSize: 16,
      lineHeight: "24px",
    },
    h6: {
      fontSize: 14,
      lineHeight: "20px",
    },
    body1: {
      fontSize: 16,
      lineHeight: "24px",
    },
    body2: {
      fontSize: 14,
      lineHeight: "20px",
    },
    display1: {
      fontSize: 48,
      lineHeight: "62px",
    },
    display2: {
      fontSize: 36,
      lineHeight: "48px",
    },
  };
};




type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object
    ? Subset<K[attr]>
    : K[attr] extends object | null
    ? Subset<K[attr]> | null
    : K[attr] extends object | null | undefined
    ? Subset<K[attr]> | null | undefined
    : K[attr];
};
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
          colors: [yellow.color, blue.color,red.color, green.color],
          foreColor: colors.grey500,
          gridBorderColor: colors.grey700,
          markerColor: colors.grey500,
          labelColor: colors.grey500,
          radialBarBackground: colors.grey500,
          radarStrokeColor: colors.grey500,
          radarConnectorColor: colors.grey500,
          polarRingColor: colors.grey500,
          polarSpokeConnectorColor: colors.grey500,
        }
      }
    },
    shadows: shadow,
    getIconSize,
    media,
  };
};

const DefaultTheme = createTheme({});

const themeWithDarkMode = createTheme();

export { DefaultTheme, themeWithDarkMode };
