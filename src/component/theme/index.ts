import typography from "./typography/typography";
import media from "./media";
import { DarkColorPallette, DefaultColorsPallete, IColorsPallette, legacyColors as colors, shadow } from "./colors";

import { IconSizes, IconType } from "../static/types/icons";
import { DefaultTheme } from "styled-components";
import { getIconSize } from "./icons";

export interface ThemeInterface extends DefaultTheme {
  colors: IColorsPallette;
  media: typeof media;
  shadow: string;
  typography: typeof typography;
  getIconSize: Record<IconType, IconSizes>;
}

const theme: ThemeInterface = {
  colors: DefaultColorsPallete,
  media,
  typography,
  shadow,
  getIconSize,
};


export const createTheme = () => {
  return {
    colors: {
      primary: {},
      secondary: {},
      error: {},
      warning: {},
      info: {},
      success: {},
      preloader: "",
      main: "",
    },
    typography: {
      common: {},
      p: {},
      headings: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      body1: {},
      body2: {},
      display1: {},
      display2: {},
      
    },
    shadows: {
      depth1: shadow,
    },
    getIconSize,
  }
}

const themeWithDarkMode = (darkMode = true): ThemeInterface => ({
  colors: DarkColorPallette,
  media,
  typography,
  shadow,
  getIconSize,
});

export { theme, themeWithDarkMode, colors };
