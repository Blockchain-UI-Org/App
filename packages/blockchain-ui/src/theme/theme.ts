import { createShadow, IShadowTheme } from "./shadow";
import { Subset } from "blockchain-ui/typeutils";
import { ITypographyTheme, createTypography } from "./typography";
import { createColorPalette, IColorPalette } from "./pallette";
import { createComponents, IComponentTheme } from "./components";
import { createMedia, IMediaTheme } from "./media";
import { TColorSchemes } from "blockchain-ui/typeutils/theme";
import { colors } from "./colors";

export interface ThemeInterface {
  palette: IColorPalette;
  media: IMediaTheme;
  components: IComponentTheme;
  typography: ITypographyTheme;
  shadows: IShadowTheme;
}

export const createTheme = ({
  palette = {},
  components = {},
  media = {},
  shadows = {},
  typography = {},
}: Subset<ThemeInterface> = {}): ThemeInterface => {
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
  palette: {
    text: {
      primary: colors.white,
      secondary: colors.grey500,
      disabled: colors.grey600,
    },
    background: {
      main: colors.grey800,
      paper: colors.grey800,
      neutral: colors.grey500Opacity16,
    },
  },
});

/**
 * All the themes are exposing here..
 */
const appThemes: Record<TColorSchemes, ThemeInterface> = {
  light: DefaultTheme,
  dark: DarkTheme,
};

export { DefaultTheme, DarkTheme, appThemes };
