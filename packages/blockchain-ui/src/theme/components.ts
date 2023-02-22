import { Subset } from "blockchain-ui/typeutils";
import { colors } from "./colors";
import { IColorVariants } from "./variants";
import merge from "lodash/merge";
import { createColorPalette, IColorPalette } from "./pallette";
import { IAlertStatus } from "blockchain-ui/components/alert/alert";

import { IButtonColors, IButtonVariants } from "../components/button";
import { alpha } from "blockchain-ui/utils";


const regular = {
  small: "16px",
  medium: "24px",
  large: "32px",
  xlarge: "60px",
} as const;

export type IIconSize = {
  xsmall?: string;
  small: string;
  medium: string;
  large: string;
  xlarge?: string;
};

export type IIconTheme = {
  sizes: {
    crypto: IIconSize;
    regular: IIconSize;
    account: IIconSize;
    filled: IIconSize;
    thin: IIconSize;
  };
};

type IAlertStyles = Partial<{
  border: string;
  bg: string;
  foreground: string;
  iconbg: string;
  actionButtonBg: string;
  actionForeground: string;
  dismissBg: string;
  dissmissForeground: string;
  dismissBorder: string;
}>;

export type IComponentTheme = {
  CreditCard: { variants: IColorVariants };
  BuiAlert: {
    variants: {
      standard: { styles: (args: { status: IAlertStatus }) => IAlertStyles };
      filled: { styles: (args: { status: IAlertStatus }) => IAlertStyles };
      outlined: { styles: (args: { status: IAlertStatus }) => IAlertStyles };
    };
  };
  BuiButton: {
    variants: Record<
      IButtonVariants,
      {
        styles: (args: { color: IButtonColors }) => Partial<{
          border: string;
          borderHoverColor: string;
          bg: string;
          foreground: string;
          hoverBg: string;
          disabledBg: string;
          disabledForeground: string;
          disabledBorder: string;
        }>;
      }
    >;
  };
  Chart: {
    variants: IColorVariants;
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
  ProgressBar: { variants: IColorVariants };
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
  Icons: IIconTheme;
};

const buildComponentTheme = (colorPalette?: IColorPalette) => {
  const pallette = colorPalette || createColorPalette();
  const { colorVariants } = pallette;
  const compTheme: IComponentTheme = {
    BuiAlert: {
      variants: {
        standard: {
          styles: ({ status }: { status: IAlertStatus }) => {
            return {
              border: undefined,
              bg: pallette.getColor("lighter")(status),
              foreground: pallette.getColor("darker")(status),
              iconbg: pallette.getColor("main")(status),
           
            };
          },
        },
        filled: {
          styles: ({ status }: { status: IAlertStatus }) => {
            return {
              border: "1px solid " + pallette.getColor("main")(status),
              bg: pallette.getColor("main")(status),
              foreground: pallette.getColor("contrastText")(status),
              iconbg: pallette.getColor("contrastText")(status),

            };
          },
        },
        outlined: {
          styles: ({ status }: { status: IAlertStatus }) => {
            return {
              border: "1px solid " + pallette.getColor("main")(status),
              bg: pallette.getColor("transparent")(status),
              foreground: pallette.getColor("dark")(status),
              iconbg: pallette.getColor("main")(status),
            };
          },
        },
      },
    },
    BuiButton: {
      variants: {
        contained: {
          styles: ({ color }) => {
            return {
              bg: pallette.getColor("main")(color),
              foreground: pallette.getColor("contrastText")(color),
              hoverBg: pallette.getColor("darker")(color),
              disabledBg: alpha(pallette.grey[500], 0.24),
              disabledForeground: alpha(pallette.grey[500], 0.08),
            };
          },
        },
        outlined: {
          styles: ({ color }) => {
            const mainColor =  color === "default" ? pallette.grey[500] : pallette.getColor("main")(color);
            return {
              border: `1px solid ${alpha(
                mainColor,
                0.32
              )}`,
              borderHoverColor: mainColor,
              bg: pallette.getColor("transparent")(color),
              foreground: mainColor,
              hoverBg: alpha(mainColor, 0.08),
              disabledBg: pallette.getColor("transparent")(color),
              disabledForeground: alpha(pallette.grey[500], 0.08),
              disabledBorder: `1px solid ${alpha(pallette.grey[500], 0.08)}`,
            };
          },
        },
        soft: {
          styles: ({ color }) => {
            const mainColor =  color === "default" ? pallette.grey[500] : pallette.getColor("main")(color);
            return {
              bg: color === "default" ? alpha(pallette.grey[500], 0.08) : alpha(pallette.getColor("main")(color), 0.16),
              foreground: mainColor,
              hoverBg:
                color === "default" ? alpha(pallette.grey[500], 0.16) : alpha(pallette.getColor("main")(color), 0.32),
              disabledBg: pallette.getColor("transparent")(color),
              disabledForeground: alpha(pallette.grey[500], 0.8),
            };
          },
        },
        text: {
          styles: ({ color }) => {
            const mainColor =  color === "default" ? pallette.grey[500] : pallette.getColor("main")(color);
            return {
              bg: pallette.getColor("transparent")(color),
              foreground: mainColor,
              hoverBg: alpha(color === "default" ? pallette.grey[500] : pallette.getColor("main")(color), 0.08),
              disabledBg: pallette.getColor("transparent")(color),
              disabledForeground: alpha(pallette.grey[500], 0.8),
            };
          },
        },
      },
    },
    CreditCard: {
      variants: colorVariants,
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
      variants: colorVariants,
    },
    Chart: {
      variants: colorVariants,
      common: {
        colors: [
          colorVariants.yellow.color,
          colorVariants.blue.color,
          colorVariants.red.color,
          colorVariants.green.color,
        ],
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
    Icons: {
      sizes: {
        crypto: {
          xsmall: "24px",
          small: "32px",
          medium: "40px",
          large: "48px",
        },
        regular: regular,
        account: regular,
        filled: regular,
        thin: regular,
      },
    },
  };
  return compTheme;
};

export const createComponents = (palette?: IColorPalette, args: Subset<IComponentTheme> = {}) => {
  const newTheme = buildComponentTheme(palette);
  return merge(newTheme, args);
};
