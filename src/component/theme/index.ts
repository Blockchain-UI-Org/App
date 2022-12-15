import typography from "./typography/typography";
import media from "./media";
import { defaultColors, colorsWithDarkMode, shadow } from "./colors";

import { IconSizes, IconType } from "../static/types/icons";
import { DefaultTheme } from "styled-components";
import { getIconSize } from "./icons";

export interface ThemeInterface extends DefaultTheme {
  colors: Record<
    keyof typeof defaultColors | keyof ReturnType<typeof colorsWithDarkMode>,
    string
  >;
  media: typeof media;
  shadow: string;
  typography: typeof typography;
  getIconSize: Record<IconType, IconSizes>;
}

const theme: ThemeInterface = {
  colors: { ...colorsWithDarkMode(), ...defaultColors },
  media,
  typography,
  shadow,
  getIconSize,
};

const themeWithDarkMode = (darkMode = true): ThemeInterface => ({
  colors: { ...colorsWithDarkMode(darkMode), ...defaultColors },
  media,
  typography,
  shadow,
  getIconSize,
});

export { theme, themeWithDarkMode };
