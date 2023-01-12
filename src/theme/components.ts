import { Subset } from "typeutils";
import { colors } from "./colors";
import { IColorVariants } from "./variants";
import merge from "lodash/merge";
import { createColorPalette, IColorPalette } from "./pallette";

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

export type IComponentTheme = {
  CreditCard: { variants: IColorVariants };
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
  const { colorVariants } = colorPalette || createColorPalette();
  return {
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
};

const DefaultComponentTheme: IComponentTheme = buildComponentTheme();

export const createComponents = (palette?: IColorPalette, args: Subset<IComponentTheme> = {}) => {
  const newTheme = buildComponentTheme(palette);
  return merge(newTheme, args);
};
