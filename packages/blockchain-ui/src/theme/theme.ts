import { createShadow, IShadowTheme } from "./shadow";
import { Subset } from "blockchain-ui/typeutils";
import { ITypographyTheme, createTypography } from "./typography";
import { createColorPalette, IColorPalette } from "./pallette";
import { createComponents, IComponentTheme } from "./components";
import { createMedia, IMediaTheme } from "./media";
import { TColorSchemes } from "blockchain-ui/typeutils/theme";
import { colors } from "./colors";
import { alpha } from "blockchain-ui/utils";

export interface ThemeInterface {
  palette: IColorPalette;
  media: IMediaTheme;
  components: IComponentTheme;
  typography: ITypographyTheme;
  shadows: IShadowTheme;
}

export interface CreateThemeArgs {
  palette: IColorPalette;
  media: IMediaTheme;
  components: IComponentTheme | ((pallette: IColorPalette) => IComponentTheme);
  typography: ITypographyTheme;
  shadows: IShadowTheme;
}

export const createTheme = ({
  palette = {},
  components = {},
  media = {},
  shadows = {},
  typography = {},
}: Subset<CreateThemeArgs> = {}): ThemeInterface => {
  const mergedPallette = createColorPalette(palette);

  const mergedTypography = createTypography(typography);

  const mergedcomponents = createComponents(mergedPallette, components);

  const mergedMedia = createMedia(media.devices);
  const mergedShadow = createShadow(shadows);

  return {
    palette: mergedPallette,
    typography: mergedTypography,
    components: mergedcomponents,
    shadows: mergedShadow,
    media: mergedMedia,
  };
};

const DefaultTheme = createTheme();

const DarkTheme = createTheme({
  components: {
    Input: {
      box: {
        common: {
          outlined: alpha(colors.grey500, 0.32),
        }
      }
    }
  },
  palette: {
    text: {
      primary: colors.white,
      secondary: colors.grey500,
      disabled: colors.grey600,
    },
    border: {
      primary: colors.white,
      secondary: colors.grey500,
      disabled: colors.grey600,
    },
    background: {
      default: colors.grey900,
      main: colors.grey800,
      paper: colors.grey800,
      neutral: alpha(colors.grey500, 0.16),
    },
  },
  components: (pallette) => ({
    BuiAlert: {
      variants: {
        standard: {
          styles: ({ status }) => {
            return {
              border: undefined,
              bg: pallette.getColor("darker")(status),
              foreground: pallette.getColor("lighter")(status),
              iconbg: pallette.getColor("light")(status),
            };
          },
        },
        outlined: {
          styles: ({ status }) => {
            return {
              border: "1px solid " + pallette.getColor("main")(status),
              bg: pallette.getColor("transparent")(status),
              foreground: pallette.getColor("main")(status),
              iconbg: pallette.getColor("main")(status),
            };
          },
        },
      },
    },
  }),
} as CreateThemeArgs);

/**
 * All the themes are exposing here..
 */
const appThemes: Record<TColorSchemes, ThemeInterface> = {
  light: DefaultTheme,
  dark: DarkTheme,
};

export { DefaultTheme, DarkTheme, appThemes };
